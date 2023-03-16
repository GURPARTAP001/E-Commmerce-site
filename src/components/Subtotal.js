import React from 'react'
import "./Subtotal.css"
//NOW TO SHOW THE SUBTOTAL WE ARE USING THE LIBRARY NAME AS THE react-curreny-format
import CurrencyFormat from "react-currency-format"
export default function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>
        (
        <>
        <p>
            Subtotal(0 items) :<strong> 0</strong>
        </p>
        <small className='subtotal_gift'>
            <input type="checkbox"/>This order contains a gift
        </small>
        </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button>Proceed to checkout</button>
   
      
    </div>
  )
}
