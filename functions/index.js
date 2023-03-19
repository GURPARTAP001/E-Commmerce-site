const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const { request, response } = require("express");
const stripe=require("stripe")('sk_test_51MnMfwSJql7chJxUSJwI1v6sxL0xcjBy8UDwCfJfXQoEqWiWNQwsDuDJ8ySQaCZSBwHUpPzMeHPORjKi2FKyT8Os00SPlT5Ako')

// -API

// -App config
const app=express();

// -Middlewars
app.use(cors({origin:true}));
app.use(express.json());

// -Api routes
app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post('payments/create',async(request,response)=>{
    const total=request.query.total;

    console.log('Payment Request Recieved:',total)

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });

    //ok checked 
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

// -Listen command
exports.api=functions.https.onRequest(app)

//Example of an endpoint
//http://127.0.0.1:5001/e-commerce-site-f664b/us-central1/api