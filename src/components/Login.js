// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png'
          alt='Amazon Logo'
        />
      </Link>
      <div className='login_container'>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={signIn} className='login_signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login_registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
