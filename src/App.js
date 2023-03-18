import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    //will only run once when the app component loads

    //the below line is the observer which always monitor the user and redefines the code
    auth.onAuthStateChanged(authUser => {
      //the above line says that when the auth user change do the below things
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just logged in/ the user was logged in
        //so when the user log in we will push the user into the data layer using:-
        dispatch({
          type: 'SET_USER',//this is the action to be performed
          user: authUser//setting the user
        })
       
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',//this is the action to be performed
          user: null//setting the user=null as the user has logged out
        })
        
      }


    })
  },[])
  return (
    <Router>
      <div className="app">

        <Routes>
          {/* The below one with the path="/" is our default route */}
          <Route exact path="/" element={<> <Header /><Home /></>} />

          <Route path="/checkout" element={<> <Header /><Checkout /></>} />

          <Route path="/login" element={<Login />} />

          <Route exact path="/payment" element={<> <Header /><Payment/></>} />

        </Routes>


      </div>
      <div style={{ marginTop: '1000px' }}></div>
    </Router>

  );
}

export default App;
