import React, { Component } from 'react';
import { Box, Container, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import TodoList from './view/components/Todolist';
import RegistrationForm from './view/components/RegistrationForm';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PocketTaxView from './view/pages/PocketTaxView';

const styles = (theme) => ({
  root: {
    '& > *': {    
      padding: theme.spacing(3),
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '900px',
      margin: '0 auto',
    },
  },
  accordion: {
    width: '100%',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 600,
    color: theme.palette.primary.main,
    flexBasis: '33.33%',
    textAlign: 'left', 
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    flexBasis: '33.33%', 
    textAlign: 'center', 
  },
  expandIcon: {
    marginLeft: 'auto',
    flexBasis: '33.33%',
    textAlign: 'right', 
  },
  accordionSummary: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
  },
  accordionDetails: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', 
  },
  container: {
    padding: theme.spacing(5),
    backgroundColor: '#f4f6f8',
    borderRadius: '12px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  },
});

class App extends Component {
  state = {
    task: [
      {
        open: false,
        label: "Todo List",
        taskName: 'todoList',
        secondaryText: 'Basic Todo List with CRUD and MUI 4 style',
      },
      {
        open: false,
        label: "Registration Form",
        taskName: 'registrationForm',
        secondaryText: 'Registration Form with Formik and Yup',
      },
      {
        open: false,
        label: "Pocket Tax",
        taskName: 'pocketTax',
        secondaryText: 'Prop drilling ',
      }
    ]
  };

  handleClick = (index) => {    
    let task = this.state.task;
    task[index].open = !task[index].open;
    this.setState({ task });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.container}>
        <div className={classes.root}>
          <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 700, color: '#333' }}>
            React Class Based Components Tutorials
          </Typography>
          <Box>
            {this.state.task.map((item, index) => (
              <Accordion key={index} expanded={item.open} onChange={() => this.handleClick(index)} className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.accordionSummary}>
                  <Typography className={classes.heading}>{item.label}</Typography>
                  <Typography className={classes.secondaryHeading}>{item.secondaryText}</Typography>                  
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <div>
                    {item.taskName === 'todoList' && <TodoList />}
                    {item.taskName === 'registrationForm' && <RegistrationForm />}
                    {item.taskName === 'pocketTax' && <PocketTaxView />}
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
            
          </Box>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(App);
