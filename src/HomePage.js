import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import {auth, db}  from './firebase';
import firebase from 'firebase';
import Modal from '@material-ui/core/Modal';

function HomePage() {

    // Initializing the state todos with 2 items
    // const [todos, setTodos] = useState(["Go for a Walk", "Meditate"]);
    const [todos, setTodos] = useState([]);

    // Initializing the state input to store the user input
    const[input, setInput] = useState("");

    // when the app loads, we need to listen to the database and fetch new todos and they get added/removed
    // useEffect(function, dependancies)
    useEffect(()=>{
        // This code runs when the app.js loads
        // This code does all the listening for change in database
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        console.log(snapshot.docs.map(doc => doc.data()));
        setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})));
        })
    }, []);

    const addTodo = (event) => {
        event.preventDefault(); // No Refresh allowed, state doesn't disappear

        // For updating the input in the database
        db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // For locally updating the input
        // setTodos([...todos, input]);
        setInput("");
    }
    return (
        <div className="homepage">
             <h1>Todo List!</h1>
            <form>
            <FormControl>
                <InputLabel>✔️ Write Todo</InputLabel>
                <Input value={input} onChange = {event => setInput(event.target.value) } />
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="secondary">Add Todo</Button>
            </FormControl>
            </form>

            <ul>
            {todos.map(todo => (
                <Todo mytodo={todo} /> //Todo must be capitalized as well
                // <li>{todo}</li>
            ))}
            </ul>
        </div>
    )
}

export default HomePage;
