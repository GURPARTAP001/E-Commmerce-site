// src/components/Payment.js
import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { db } from '../firebase';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from '../reducer';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.createPaymentIntent({
      amount: getBasketTotal(basket) * 100,
      currency: 'inr',
      payment_method: {
        card: cardElement,
        billing_details: {
          name: user?.email,
        },
      },
    });

    if (error) {
      console.error(error);
    } else {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      dispatch({
        type: 'EMPTY_BASKET',
      });

      navigate('/orders');
    }
  };

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (
          {basket.length} {basket.length === 1 ? 'item' : 'items'})
        </h1>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment_items'>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            <form onSubmit={handleSubmit}>
              <CardElement />
              <button disabled={!stripe}>
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
