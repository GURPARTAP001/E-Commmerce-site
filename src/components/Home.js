// src/components/Home.js
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Product from './Product';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products?limit=10&page=${page}`);
      setProducts(prevProducts => [...prevProducts, ...response.data]);
      setHasMore(response.data.length > 0);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    if (scrollHeight - scrollTop === clientHeight && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="home">
      <div className="home_image_container">
        <img className="home_image" src="https://www.mikevestil.com/wp-content/uploads/2021/10/BANNER-ADS.jpg" alt="home banner" />
        <div className="home_gradient" ><img src="https://www.mikevestil.com/wp-content/uploads/2021/10/BANNER-ADS.jpg" alt="home banner" /></div>
      </div>
      <div className="home_row">
        {products.map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            rating={Math.round(rating.rate)}
          />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more products to load.</p>}
    </div>
  );
}

export default Home;
