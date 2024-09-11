import React, { Component } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Typography, Box, Card, CardContent, ListItemIcon, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    padding: theme.spacing(2),
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    padding: theme.spacing(3),
  },
  title: {
    fontWeight: 700,
    color: '#333',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  taskList: {
    marginTop: theme.spacing(3),
  },
  taskItem: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(1),
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionButtons: {
    marginLeft: theme.spacing(1),
  },
  checkbox: {
    color: theme.palette.primary.main,
  },
});

class TodoList extends Component {
  state = {
    taskList: [],
    newTask: '',
    error: null,
  };

  handleNewTaskChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTask = this.state.newTask.trim();
    if (!trimmedTask) {
      this.setState({ error: 'Please enter a task' });
      return;
    }
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, { name: trimmedTask, isEditing: false, originalName: trimmedTask, isCompleted: false }],
      newTask: '',
      error: null,
    }));
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.filter((_, i) => i !== index),
    }));
  };

  handleEditToggle = (index) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.map((task, i) => (i === index ? { ...task, isEditing: !task.isEditing, originalName: task.name } : task)),
    }));
  };

  handleEditChange = (value, index, field) => {
    const updatedTasks = [...this.state.taskList];
    updatedTasks[index][field] = value;
    this.setState({ taskList: updatedTasks });
  };

  handleSaveEdit = (index) => {
    const updatedTasks = [...this.state.taskList];
    updatedTasks[index].isEditing = false;
    this.setState({ taskList: updatedTasks });
  };

  handleCancelEdit = (index) => {
    const updatedTasks = [...this.state.taskList];
    updatedTasks[index].name = updatedTasks[index].originalName;
    updatedTasks[index].isEditing = false;
    this.setState({ taskList: updatedTasks });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              Todo List
            </Typography>
            <Box component="form" onSubmit={this.handleSubmit} className={classes.form}>
              <TextField
                label="Add a new task..."
                value={this.state.newTask}
                onChange={this.handleNewTaskChange}
                variant="outlined"
                className={classes.textField}
                error={this.state.error !== null}
                helperText={this.state.error}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Task
              </Button>
            </Box>
            <List className={classes.taskList}>
              {this.state.taskList.map((task, index) => (
                <ListItem key={index} className={classes.taskItem}>
                  {task.isEditing ? (
                    <>
                      <TextField
                        value={task.name}
                        onChange={(event) => this.handleEditChange(event.target.value, index, 'name')}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                      />
                      <ListItemSecondaryAction className={classes.buttonGroup}>
                        <IconButton edge="end" onClick={() => this.handleSaveEdit(index)}>
                          <SaveIcon color="primary" />
                        </IconButton>
                        <IconButton edge="end" onClick={() => this.handleCancelEdit(index)}>
                          <CancelIcon color="secondary" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </>
                  ) : (
                    <>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={task.isCompleted}
                          onChange={(event) => this.handleEditChange(event.target.checked, index, 'isCompleted')}
                          className={classes.checkbox}
                        />
                      </ListItemIcon>
                      <ListItemText primary={task.name} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => this.handleEditToggle(index)} disabled={task.isCompleted}>
                          <EditIcon color="primary" />
                        </IconButton>
                        <IconButton edge="end" onClick={() => this.handleDelete(index)}>
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </>
                  )}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(TodoList);

