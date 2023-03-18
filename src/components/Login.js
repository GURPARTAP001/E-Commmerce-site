import React, { useState } from 'react'
import './Login.css'
//now after the user create the account we want to take them to the home page thus we will use the use history
import { Link,useNavigate} from "react-router-dom"
import { auth } from '../firebase';
//In order to tract the content present inside our fields we are creating the usestate
function Login() {
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    //Function for the sign-in button
    const signIn=event=>{
        event.preventDefault()//this will prevent the page from getting refreshed

        //firebase code foir the login
        auth.signInWithEmailAndPassword(email,password)
        //if successfully created a new user with email and password
        .then((auth)=>{
          console.log(auth);
          //we are redirecting the user to the home page
          if(auth){
            navigate('/')
          }
        })
        //else
        .catch(error=>alert(error.message))


    }

    //Function for the create account button
    const register=event=>{
        event.preventDefault()
         //FIREBASE CODE for the register

        //the below line creates the user with the given email and password
      auth.createUserWithEmailAndPassword(email,password)

      //if the user is created successfully then
      .then((auth)=>{
        //it successfully created a new user with email and password
        console.log(auth);
        //we are redirecting the user to the home page
        if(auth){
          navigate('/')
        }
      })
      //else
      .catch(error=>alert(error.message))
       
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
                <input type="text" value={email} //through the onchange now we can track the email that get filled inside the field
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
