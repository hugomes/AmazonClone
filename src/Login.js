import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push('/');
        })
        .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log("OK");
            console.log(auth)
            if (auth){
                history.push('/');
            }
        })
        .catch((error) => {
            console.log("ERROR");
            console.log(error);
        });
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"></img>
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                    <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. PLease see our Privacy Notice, 
                    our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
