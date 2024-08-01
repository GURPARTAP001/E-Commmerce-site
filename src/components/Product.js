// src/components/Product.js
import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  // Function to generate stars based on rating
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rate ? 'star filled' : 'star'}>⭐</span>
      );
    }
    return stars;
  };

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {renderStars(Math.round(rating.rate))}
        </div>
        <p>{rating.count} reviews</p>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
