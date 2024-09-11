import React, { Component } from 'react';
import { Box, Button, Container , Accordion , AccordionDetails , AccordionSummary} from '@material-ui/core';
import TodoList from './view/components/Todolist';
import RegistrationForm from './view/components/RegistrationForm';
import { withStyles } from '@material-ui/core/styles';
import {ExpandMoreIcon} from '@material-ui/icons';

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
    task :[
       {
        open: false,
        label : "Todo List",
        taskName : 'todoList',
      },
       {
        open: false,
        label : "Registration Form",
        taskName : 'registrationForm',
      },
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
      <Container>
          <div className={classes.root}>
          <h1>React Class Based Components Tutorials</h1>
          <Box>
            {this.state.task.map((item, index) => (
                <Box>
                  <Button variant="contained" color="primary" onClick={() => this.handleClick(index)}  className={classes.button}  >
                    {item.label}
                  </Button>
                  {item.open === true && (
                    <div className={item.label}>                      
                      {item.taskName === 'todoList' && <TodoList />}
                      {item.taskName === 'registrationForm' && <RegistrationForm />}
                    </div>
                  )}
                </Box>              
              ))}         
          </Box>
      </div>
        </Container>
    );
  }
}

export default withStyles(styles)(App);

