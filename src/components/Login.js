import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom"
//In order to tract the content present inside our fields we are creating the usestate
function Login() {
    const[emial,setEmail]=useState('');
    const[password,setPassword]=useState('');

    //Function for the sign-in button
    const signIn=event=>{
        event.preventDefault()//this will prevent the page from getting refreshed

        //firebase code foir the login
    }

    //Function for the create account button
    const register=event=>{
        event.preventDefault()

        //firebase code for the register
    }
  return (
    <div className='login'>
        <Link to='/'>
      <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png" alt="amaon logo" />
        </Link>

        <div className="login_container">
            <h1>Sign-in</h1>
            <form >
                <h5>E-mail</h5>
                <input type="text" value={emial} //through the onchange now we can track the emial that get filled inside the field
                 onChange={event=>setEmail(event.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={event=>setPassword(event.target.value)} />

                <button type='submit' 
                onClick={signIn}className='login_signInbutton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button onClick={register}className='login_registerbutton'>Create Account</button>
        </div>
    </div>
  )
}

export default Login
