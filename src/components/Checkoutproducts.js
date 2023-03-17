import React from 'react'
import './Checkoutproducts.css'
import { useStateValue } from '../StateProvider';


export default function Checkoutproducts({ id, title, price, image, rating }) {

  //in order to update the basket we need the usestate
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //removing the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <div className='checkoutproducts'>
      <img className='checkoutproduct_image' src={image} alt="product image" />

      <div className="checkoutproduct_info">
        <p className='checkoutproduct_title'>{title}</p>
        <p className='checkoutproduct_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating).fill().map(() => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>

    </div>
  )
}
