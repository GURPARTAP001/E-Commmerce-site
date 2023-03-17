import React from 'react'
import "./Subtotal.css"
//NOW TO SHOW THE SUBTOTAL WE ARE USING THE LIBRARY NAME AS THE react-curreny-format
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

export default function Subtotal() {
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
        <button>Proceed to checkout</button>
   
      
    </div>
  )
}
