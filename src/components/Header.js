import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';//this is the icon present inside the search bar
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';//this is the icon present at the end of the nav,with the count of the product in the basket
import { Link } from "react-router-dom"

function Header() {
  return (
    // Below is the main header of the webpage
    <div className='header'>

      <Link to="/">
      {/* it is  the amazon logo inside the navbar of the webpage */}
      <img className="header_logo" src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt="amazon logo" />
      </Link>
      {/* the below is the search bar present inside the navbar at the top of the webpage  */}
      <div className="header_search">
        <input type="text" className='header_inputsearch' />
         {/* below is the searh LOGO present with the search bar,as we had added the material UI package so directly adding the logo  */}
        <SearchIcon className="header_searchicon" />
      </div>

      {/* it is the the options present next to the serach bar on the top of  the webpage */}
      <div className="header_nav">
        {/* we are making the seperate div for each option inside which we will enclose the span which will have the options */}
        <div className="header_option">
          <span className='header_optionOne'>Hello Guest</span>
          <span className='header_optionTwo'>Sign In</span>
        </div>
        <div className="header_option">
          <span className='header_optionOne'>Return</span>
          <span className='header_optionTwo'>& Orders</span>
        </div>
        <div className="header_option">
          <span className='header_optionOne'>Your</span>
          <span className='header_optionTwo'>Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className='header_optionTwo header_basketcount'>0</span>
        </div>
        </Link>
      </div>

    </div>
  )
}

export default Header


