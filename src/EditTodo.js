import React, { useState } from 'react'
import { Button, Input } from '@material-ui/core';
import {auth, db}  from './firebase';
import './EditTodo.css'

function EditTodo({props}) {

    const [input, setInput] = useState();
    const [open, setOpen] = useState(true);

    const updateTodo = () =>{
        // update the todo with the new input text
        db.collection('todos').doc(props.mytodo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false);
    }

    return (
        <form className="todoEdit">
            <h1>Change of Mind?</h1>
            <Input 
                type="text" 
                value={input}
                placeholder={props.mytodo.todo} 
                onChange={event => setInput(event.target.value)}
                />
            <Button 
                variant="contained"
                type="submit" 
                color="primary" 
                disabled={!input}
                onClick={updateTodo}
                >Done</Button>
                </form>
    )
}

export default EditTodo
