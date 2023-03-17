import React from 'react'
import './Checkoutproducts.css'

export default function Checkoutproducts({ id,title, price, image, rating }) {
  return (
    <div className='Checkoutproducts'>
        <img className='checkoutproduct_image' src={image} alt="product image" />

        <div className="checkoutproduct_info">
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct__rating">
                    {Array(rating).fill().map(() => (
                    <p>⭐</p>
                    ))}
                </div>
                <button>Remove from basket</button>
        </div>
      
    </div>
  )
}
