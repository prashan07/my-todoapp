import React from 'react';
import { Button } from '@material-ui/core';
import {auth, provider}  from './firebase';

function Register() {

    const signIn = ()=> {
        auth.signInWithPopup(provider).then((result)=> console.log(result)).catch((error)=> alert(error.message));
    };

    return (
        <div>
            <h1>Registration</h1>
            <div>
                <h1>Sign In to WhatsApp</h1>
            </div>

            <Button variant="contained" onClick={signIn} type="submit">Sign In With Google</Button>
        </div>
    )
}

export default Register
