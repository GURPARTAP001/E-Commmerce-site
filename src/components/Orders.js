// src/components/Orders.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import './Orders.css';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })))
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders_list'>
        {orders.map(({ id, data }) => (
          <div key={id} className='order'>
            <h2>Order ID: {id}</h2>
            <p>{new Date(data.created * 1000).toLocaleString()}</p>
            <p className='order_total'>Order Total: ₹{data.amount / 100}</p>
            <div className='order_items'>
              {data.basket.map((item) => (
                <div key={item.id} className='order_item'>
                  <img src={item.image} alt={item.title} />
                  <div className='order_itemInfo'>
                    <p>{item.title}</p>
                    <p className='order_itemPrice'>₹{item.price}</p>
                    <p className='order_itemRating'>
                      {'⭐'.repeat(item.rating)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
