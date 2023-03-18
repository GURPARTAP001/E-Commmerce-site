import React from 'react'
import "./Subtotal.css"
//NOW TO SHOW THE SUBTOTAL WE ARE USING THE LIBRARY NAME AS THE react-curreny-format
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import {useNavigate} from "react-router-dom" 

export default function Subtotal() {

  const navigate=useNavigate();//this give us the browser history,now using this we can programatically go/push to a link unlike using the Link(if we use the link then the styling of the button will get of and it will look like a link)
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
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
        <button onClick={event=>navigate('/payment')}>Proceed to checkout</button>
   
      
    </div>
  )
}
