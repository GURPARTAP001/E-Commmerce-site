import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider';
import Checkoutproducts from './Checkoutproducts';
import './Payment.css'
import { Link, useNavigate } from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../reducer';
import axios from '../axios';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();

    const navigate = useNavigate();

    const stripe=useStripe();
    const elements=useElements();

    //creating the state variables
    const[succeeded,setSucceeded]=useState(false)
    const[processing,setProcessing]=useState("")
    const[error,setError]=useState(null)
    const[disabled,setDisabled]=useState(true)
    const[clientSecret,setClientSecret]=useState(true)//this the use to tell the stripe that the user is going to make "xyz" amount of transcation so be prepared

    //it is the price of the dependencies which happen when some thing take place... So in this case when ever the basket changes we need to generate the special stripe secret which will alow us to take payment from the customer
    useEffect(()=>{
        //generates the special stripe secret which allows us to charge a customer

        //this is the function body
        const getClientSecret=async()=>{
            //here the "axios" is the way of making the request 
            //the below is the object that we have created
              const response=await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`//here the *100 is the currency sub-unit  we are using the sub unit of dollar as not able to get for the ruppe
              });
              setClientSecret(response.data.clientSecret)
        }

        getClientSecret();//this is the function call

    },[basket])

    console.log('The Secret IS >>>>',clientSecret)

    //the below function takes an event and do some thing
    const handleSubmit= async(event)=>{
        //do all the stripe stuff
        event.preventDefault()//it prevent from refreshing 
        setProcessing(true)//as soon as we hit the button it gonna block us from hitting the button again,thus we can't reclick the buy button again and again

        //The below function takes two arguments 1: clientsecret is the amount we gonna charge the and 2:it is the object that has the card details and the method to find that card so we can make the transcation
        const payload= await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({PaymentIntent})=>{
            //paymentIntent=payment confirmation
            setSucceeded(true);//as then the trascation was successfull
            setError(null)
            setProcessing(false)
            navigate('/orders')//want to change the page after we had done the payment

        })
    }//as the above function is await function so it will also have the .then()
    const handleChange=event=>{
        //Listen for changes in the CardElement and display any error as the customer types their card detials
        setDisabled(event.empty);//this means if the event is empty disable the button
        setError(event.error?event.error.message:"")//if we have the error show the error else show nothing
    }
    return (
        <div className='payment'>
            <div className="payment_container">
            {/* we are redirecting the link to add to the basket page */}
                <h1>Checkout(<Link to="/checkout">{basket?.length} items</Link>)</h1>
                {/* Payment section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>#987/1,xyz enclave</p>
                        <p>asd town,ybf city,India</p>
                    </div>
                </div>


                {/* Payment section - review item*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {/* here we are using the reusable approch as we are using the checkoutproducts to show the items present inside the basket on the payment page */}
                        {basket.map(item=>(
                            <Checkoutproducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* stripe code will come here */}
                        
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                            <CurrencyFormat
        renderText={(value)=>
        (
        <>
        <p>
            Subtotal({basket.length}) :<strong>{value}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type="checkbox"/>This order contains a gift
        </small>
        </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button disabled={processing || disabled || succeeded}>
            <span>{processing? <p>Processing</p>:"Buy NOw"}</span>

        </button>
                            </div>
                            {/* in case of show ERROR:eg wrong fromat pf the card no.*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Payment
