import { Button } from '@material-ui/core';
import React from 'react'
import { auth,provider } from './firebase';
import "./Login.css";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=() => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then((result)=>{
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                });
            })
            .catch((error)=>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                src="https://www.logolynx.com/images/logolynx/49/495cb2518355a144b32b82ff8f1c7187.png"
                alt="chandigarh university logo"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
