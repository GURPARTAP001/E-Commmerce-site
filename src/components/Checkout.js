import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
export default function Checkout() {
    return (
        <div>
            <div className="checkout">
                <div className="checkout_left">
                    <img className='checkout_ad' src="https://m.media-amazon.com/images/I/61MTFnfw6YL._SX3000_.jpg" alt="ad" />

                <div>
                    <h1 className="checkout_title">Your Shopping Basket</h1>
                </div>
                </div>

            <div className="checlout_right">
               <Subtotal/>
            </div>

            </div>


        </div>
    )
}
