import React, { useState } from 'react'
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import SelectInput from '@material-ui/core/Select/SelectInput';

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

function Todo(props) { //Needs to be capitalized

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };
   
    const updateTodo = () =>{
        // update the todo with the new input text
        db.collection('todos').doc(props.mytodo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false);
    }

    return (
        <div id="main">
             <Modal open={open} onClose={e => setOpen(false)}>
            <div className="{classes.paper}">
                <h1>Let's Edit</h1>
                <input placeholder={props.mytodo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <button disabled={!input} onClick={updateTodo}>Done</button>
            </div>
            </Modal>
            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={props.mytodo.todo}/>
                    <Button onClick={event => setOpen(true)}>Edit</Button>
                    <DeleteIcon onClick={event => db.collection('todos').doc(props.mytodo.id).delete()}/>
                </ListItem> 
                
            </List>
        </div>
       
    )
};

export default Todo;
