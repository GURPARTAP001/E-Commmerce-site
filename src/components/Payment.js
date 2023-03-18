import React from 'react'
import { useStateValue } from '../StateProvider';
import Checkoutproducts from './Checkoutproducts';
import './Payment.css'
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
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

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Payment
