import React from 'react'
import "./Product.css"
import { PropsFor } from '@mui/system'
import { useStateValue } from '../StateProvider';

function Product({ id,title, price, image, rating }) {
//here the "state" is the current state of the data layer and the "dispatch" is the item we want to push into the data layer and also the action which we will perform to do so
    const [state,dispatch]=useStateValue();
    const addToBasket=()=>{
        //through this function we are pushing the content into the data layer when the add to basket btn is pressed
        
        dispatch({
            //below is the action which when taken the item get pushed to the data layer
            type:"ADD_TO_BASKET",
            //below is the detials of the item that get pushed into the data layer 
            item:{
                title:title,
                price:price,
                image:image,
                rating:rating,
                id:id

            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(() => (
                    <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="product image" />
            <button onClick={addToBasket}>Add To Basket</button>
            


        </div>
    )
}

export default Product
