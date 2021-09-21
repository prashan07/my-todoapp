import React, { useState } from 'react'
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import './Todo.css';
import {auth, db}  from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import EditTodo from './EditTodo';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) { //Needs to be capitalized

    // Modal Styling
    function getModalStyle() {
        const top = 50;
        const left = 50;
    
        return {
        top: `${top}%`,
        left: `${left}%`, 
        transform: `translate(-${top}%, -${left}%)`,
        };
      }
      
      const useStyles = makeStyles((theme) => ({
          paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          },
      }));

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };
   

    return (
        <div id="main">
             <Modal open={open} onClose={e => setOpen(false)}>
             <div style={modalStyle} className={classes.paper}>
                 <EditTodo props={props} open={open}/>
            </div>
            </Modal>
            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={props.mytodo.todo} className="todo_list_text"/>
                    <Button onClick={event => setOpen(true)}><EditIcon/>Edit</Button>
                    <DeleteIcon onClick={event => db.collection('todos').doc(props.mytodo.id).delete()}/>
                </ListItem> 
                
            </List>
        </div>
       
    )
};

export default Todo;
