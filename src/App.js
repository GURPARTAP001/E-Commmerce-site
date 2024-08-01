// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Login from './components/Login';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="app">
      {/* <Router> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
