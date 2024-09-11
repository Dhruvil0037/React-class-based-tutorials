import React, { Component } from 'react';
import { Box, Button, Container } from '@material-ui/core';
import TodoList from './view/components/Todolist';
import RegistrationForm from './view/components/RegistrationForm';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      paddingTop: theme.spacing(2),      
      alignItems: 'center',
      justifyContent: 'center',            
    },
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main, 
    color: theme.palette.common.white,
  },
});

class App extends Component {
  state = {
    todoList: false,
    registrationForm: false,
  };

  handleClick = (field) => {
    this.setState({ [field]: !this.state[field] });
  };

  render() {
    const { classes } = this.props; 
    return (
      <Container>
          <div className={classes.root}>
          <h1>React Class Based Components Tutorials</h1>
          <Box>
            <Box >
              <Button variant="contained" color="primary" onClick={() => this.handleClick("todoList")}  className={classes.button}  >
                Todo List
              </Button>
              {this.state.todoList === true && (
                <div className='TodoList'>
                  <TodoList />
                </div>
              )}
            </Box>
            <Box >
              <Button variant="contained" color="primary" onClick={() => this.handleClick("registrationForm")} className={classes.button} >
                Registration Form
              </Button>
              {this.state.registrationForm === true && (
                <div className='RegistrationForm'>
                  <RegistrationForm />
                </div>
              )}
            </Box>
          </Box>
      </div>
        </Container>
    );
  }
}

export default withStyles(styles)(App);

