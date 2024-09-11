import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup'; 
import { Button, Container, MenuItem, Select, TextField, Typography, Box, InputLabel, Card, CardContent, CardActions, FormControl, FormHelperText, InputAdornment, IconButton, FilledInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Visibility , VisibilityOff} from '@material-ui/icons';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  cardAction: {
    margin: theme.spacing(2),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    margin: theme.spacing(2),
    flex: '1 1 48%',
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
  },
  fullWidthField: {
    margin: theme.spacing(2),
    width: '100%',
  },
  select: {
    margin: theme.spacing(2),
    flex: '1 1 48%',
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
  },
  card: {
    minWidth: 275,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(2),
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
      firstName: yup.string("Enter Your First Name").required('First Name is required'),
      lastName: yup.string("Enter Your Last Name").required('Last Name is required'),
      email: yup.string("Enter Your Email Address").email('Invalid email').required('Email is required'),
      password: yup.string("Enter Your Password").required('Password is required').min(8, 'Password must be at least 8 characters').max(16, 'Password must be at most 16 characters'),
      gender: yup.string("Select Your Gender").required('Gender is required'),
      address: yup.string("Enter Your Address").required('Address is required'),
      confirmPassword: yup.string("Confirm Your Password").required('Confirm Password is required').oneOf([yup.ref('password'), null], 'Passwords must match')
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
      <Container maxWidth='sm'>
        <Box className={classes.root}>
          <Card className={classes.card}>
            <CardContent>        
              <Formik
                initialValues={this.state.initialValues}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <Form onSubmit={handleSubmit} className={classes.form}>
                    <Typography variant="h4" align="center">Registration Form</Typography>
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
                    <FormControl variant="filled" className={classes.fullWidthField}>
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
                    <FormControl variant="filled" className={classes.textField} error={touched.password && Boolean(errors.password)}>
											<InputLabel htmlFor="password">Password</InputLabel>
                      <FilledInput
                        id="password"
                        name="password"
                        label="Password"
                        type={this.state.showPassword.password ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange}                                                
                        variant="filled"
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															edge="end"
															onClick={()=>this.handleClickShowPassword('password')}
															onMouseDown={() => this.handleMouseDownPassword}
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
                        variant="filled"
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															edge="end"
															onClick={()=>this.handleClickShowPassword('confirmPassword')}
															onMouseDown={() => this.handleMouseDownPassword}
														>
														{this.state.showPassword.confirmPassword ? <Visibility /> : <VisibilityOff />}
														</IconButton>
													</InputAdornment>
												}
                      />
											{touched.confirmPassword && <FormHelperText>{errors.confirmPassword}</FormHelperText>}
                    </FormControl>
                    <CardActions className={classes.cardAction}>
                      <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </CardActions>
                  </Form>
                )}
              </Formik>        
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  }

  render() {
    return this.renderForm();
  }
}

export default withStyles(styles)(RegistrationForm);
