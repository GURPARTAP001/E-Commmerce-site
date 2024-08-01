// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import './Header.css';

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png'
          alt='amazon logo'
        />
      </Link>
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <button className='header_searchButton'>Search</button>
      </div>
      <div className='header_nav'>
        <Link to={!user && '/login'} className='header_link'>
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>Hello {user ? user.email : 'Guest'}</span>
            <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/orders' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout' className='header_link'>
          <div className='header_optionBasket'>
            <span className='header_optionLineOne header_basketCount'>{basket?.length}</span>
            <img
              className='header_basketIcon'
              src='https://upload.wikimedia.org/wikipedia/commons/7/73/Amazon_shopping_cart_icon.svg'
              alt='basket'
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
