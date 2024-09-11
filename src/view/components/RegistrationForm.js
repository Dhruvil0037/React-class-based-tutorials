import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup'; 
import { Button, Container, MenuItem, Select, TextField, Typography, InputLabel, Card, CardContent, CardActions, FormControl, FormHelperText, InputAdornment, IconButton, FilledInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20vh',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    MsAppearance: 'none',
  },
  card: {
    width: '100%',
    maxWidth: 500,
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  textFieldPair: {
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
  },
  textField: {
    flex: '1 1 48%',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    MsAppearance: 'none',
  },
  select: {
    flex: '1 1 48%',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
  },
  addressField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  actionButton: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    width: '100%',
    borderRadius: 8,
    padding: theme.spacing(1.5),
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'scale(1.05)',
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        confirmPassword: ''
      },
      showPassword: {
        password: false,
        confirmPassword: false
      },
    };
    this.validationSchema = yup.object().shape({
      firstName: yup.string().required('First Name is required'),
      lastName: yup.string().required('Last Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(16, 'Password must be at most 16 characters'),
      gender: yup.string().required('Gender is required'),
      address: yup.string().required('Address is required'),
      confirmPassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password'), null], 'Passwords must match')
    });
  }

  handleSubmit = (values) => {
    this.setState({ initialValues: values });
  }

  handleClickShowPassword = (field) => {
    this.setState({ showPassword: { ...this.state.showPassword, [field]: !this.state.showPassword[field] } });
  }

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  renderForm = () => {
    const { classes } = this.props;
    return (
      <Container maxWidth='sm' className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              Registration Form
            </Typography>
            <Formik
              initialValues={this.state.initialValues}
              validationSchema={this.validationSchema}
              onSubmit={this.handleSubmit}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <Form onSubmit={handleSubmit} className={classes.form}>
                  <div className={classes.textFieldPair}>
                    <FormControl variant="filled" className={classes.textField}>
                      <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        variant="filled"
                      />
                    </FormControl>
                    <FormControl variant="filled" className={classes.textField}>
                      <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        variant="filled"
                      />
                    </FormControl>
                  </div>
                  <div className={classes.textFieldPair}>
                    <FormControl variant="filled" className={classes.textField}>
                      <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        variant="filled"
                      />
                    </FormControl>
                    <FormControl variant="filled" className={classes.select} error={touched.gender && Boolean(errors.gender)}>
                      <InputLabel id="gender-label">Gender</InputLabel>
                      <Select
                        labelId="gender-label"
                        id="gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleChange}
                        variant="filled"
                      >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                      </Select>
                      {touched.gender && <FormHelperText>{errors.gender}</FormHelperText>}
                    </FormControl>
                  </div>
                  <FormControl variant="filled" className={classes.addressField}>
                    <TextField
                      id="address"
                      name="address"
                      label="Address"
                      value={values.address}
                      onChange={handleChange}
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                      variant="filled"
                    />
                  </FormControl>
                  <div className={classes.textFieldPair}>
                    <FormControl variant="filled" className={classes.textField} error={touched.password && Boolean(errors.password)}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <FilledInput
                        id="password"
                        name="password"
                        type={this.state.showPassword.password ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                              onClick={() => this.handleClickShowPassword('password')}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                              {this.state.showPassword.password ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {touched.password && <FormHelperText>{errors.password}</FormHelperText>}
                    </FormControl>
                    <FormControl variant="filled" className={classes.textField} error={touched.confirmPassword && Boolean(errors.confirmPassword)}>
                      <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                      <FilledInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type={this.state.showPassword.confirmPassword ? 'text' : 'password'}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                              onClick={() => this.handleClickShowPassword('confirmPassword')}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                              {this.state.showPassword.confirmPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {touched.confirmPassword && <FormHelperText>{errors.confirmPassword}</FormHelperText>}
                    </FormControl>
                  </div>
                  <CardActions className={classes.actionButton}>
                    <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
                      Submit
                    </Button>
                  </CardActions>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    );
  }

  render() {
    return this.renderForm();
  }
}

export default withStyles(styles)(RegistrationForm);
