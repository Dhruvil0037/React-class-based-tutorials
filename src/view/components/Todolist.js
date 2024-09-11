import React, { Component } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Typography, Box, ButtonGroup , Card, CardContent, CardActions , Container , ListItemIcon ,Checkbox  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

class TodoList extends Component {
    state = { 
        taskList: [], 
        newTask: '', 
        error:null,
    };

     useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
            '& .MuiButton-root': {
                margin: theme.spacing(1),
            },
            '& .MuiList-root': {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
            '& .MuiListItem-root': {
                '& . Mui-checked': {
                    textDecoration: 'line-through',
                },
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            },
            '& .MuiListItem-button': {
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
            },
            '& .MuiListItem-secondaryAction': {
                paddingRight: 96,
            },
            '& .MuiListItemText-root': {
                flex: 'none',
            },
            '& .MuiListItemIcon-root': {
                minWidth: 36,
            },
            '& .MuiButtonGroup-root': {
                '& .MuiButtonBase-root': {
                    minWidth: 36,
                },
            },           
        },
      }));

    handleNewTaskChange = (event) => {
        this.setState({ newTask: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const trimmedTask = this.state.newTask.trim();
        if (!trimmedTask) {            
            this.setState({ error: 'Please enter a task' });
            return;
        }            
        this.setState(prevState => ({
            taskList: [...prevState.taskList, { name: trimmedTask, isEditing: false, originalName: trimmedTask  , isCompleted: false }],
            newTask: '',
            error: null
        }));
    }

    handleDelete = (index) => {
        this.setState(prevState => ({
            taskList: prevState.taskList.filter((_, i) => i !== index)
        }));
    }

    handleEditToggle = (index) => {
        this.setState(prevState => ({
            taskList: prevState.taskList.map((task, i) => 
                i === index ? { ...task, isEditing: !task.isEditing, originalName: task.name } : task
            )
        }));
    }

    handleEditChange = (value, index , field) => {
        const updatedTasks = [...this.state.taskList];
        updatedTasks[index][field] = value;
        this.setState({ taskList: updatedTasks });
    }

    handleSaveEdit = (index) => {
        const updatedTasks = [...this.state.taskList];
        updatedTasks[index].isEditing = false;
        this.setState({ taskList: updatedTasks });
    }

    handleCancelEdit = (index) => {
        const updatedTasks = [...this.state.taskList];
        updatedTasks[index].name = updatedTasks[index].originalName;
        updatedTasks[index].isEditing = false;
        this.setState({ taskList: updatedTasks });
    }

    render() {
        return (<>
                <div className={this.useStyles.root}>
                    <Container maxWidth="sm">
                        <Card sx={{ maxWidth: 345 }}>
                        <CardContent >
                            <Box >
                                <Typography variant="h4" component="div" >
                                    Todo List
                                </Typography>
                                <Box component="form" onSubmit={this.handleSubmit} noValidate  >
                                    <TextField 
                                        fullWidth 
                                        label="Add a new task..." 
                                        value={this.state.newTask} 
                                        onChange={this.handleNewTaskChange}
                                        variant="outlined"
                                        margin="normal"
                                        error={this.state.error !== null ? true : false}
                                        helperText={this.state.error}
                                    />
                                    <CardActions>
                                        <Button type="submit" variant="contained" color="primary">
                                            Add Task
                                        </Button>
                                    </CardActions>
                                </Box>                                
                                <List>
                                    {this.state.taskList.map((task, index) => (
                                        <div style={{textDecoration : `${task.isCompleted ? 'line-through' : 'none' }`}}>
                                            <ListItem alignItems="flex-start" key={index} role={undefined} sx={{                                               
                                                textDecoration: `${task.isCompleted ? 'line-through' : 'none'}`,
                                                width: '100%'
                                            }} >                                               
                                                {task.isEditing ? (
                                                    <>                                                    
                                                        <TextField                                                                                                                     
                                                            value={task.name} 
                                                            onChange={(event) => this.handleEditChange(event.target.value, index , 'name')}
                                                            variant="outlined"
                                                            margin="normal"
                                                            size='medium'
                                                        />   
                                                        <ListItemSecondaryAction>
                                                            <ButtonGroup>
                                                                <IconButton edge="end" aria-label="save"  onClick={() => this.handleSaveEdit(index)}>
                                                                    <SaveIcon color='primary' />
                                                                </IconButton>
                                                                <IconButton edge="end" aria-label="cancel"  onClick={() => this.handleCancelEdit(index)}>
                                                                    <CancelIcon color='secondary'/>
                                                                </IconButton>   
                                                            </ButtonGroup>
                                                        </ListItemSecondaryAction>
                                                    </>
                                                ) : (
                                                    <>
                                                        <ListItemIcon>                                                 
                                                            <Checkbox
                                                                edge="start"
                                                                tabIndex={-1}
                                                                disableRipple
                                                                checked={task.isCompleted}
                                                                onChange={(event) => {
                                                                this.handleEditChange(event.target.checked, index , 'isCompleted')
                                                                }
                                                                }
                                                            />         
                                                        </ListItemIcon>
                                                        <ListItemText primary={task.name} />
                                                        <ListItemSecondaryAction>
                                                            <ButtonGroup>
                                                                <IconButton edge="end" aria-label="edit" onClick={() => this.handleEditToggle(index)} disabled={task.isCompleted ? true : false }>
                                                                    <EditIcon color='primary'/>
                                                                </IconButton>
                                                                <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(index)}>
                                                                    <DeleteIcon color='secondary' />
                                                                </IconButton>
                                                            </ButtonGroup>
                                                        </ListItemSecondaryAction>
                                                    </>
                                                )}
                                            </ListItem>
                                        </div>
                                    ))}
                                </List>
                            </Box>
                        </CardContent>
                        </Card>
                    </Container>
                </div>
                </>);
    }
}

export default TodoList;