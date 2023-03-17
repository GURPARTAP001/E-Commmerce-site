import React from 'react'
import "./Checkout.css"
import Checkoutproducts from './Checkoutproducts';
import { useStateValue } from '../StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (

        <div>
            <div className="checkout">
                <div className="checkout_left">
                    <img className='checkout_ad' src="https://m.media-amazon.com/images/I/61MTFnfw6YL._SX3000_.jpg" alt="ad" />

                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <Checkoutproducts
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="checlout_right">
                    <Subtotal />
                </div>

            </div>


        </div>
    )
}

export default Checkout