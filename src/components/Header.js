import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    // Below is the main header of the webpage
    <div className='header'>

      {/* it is  the amazon logo on the top of the webpage */}
      <img className="header_logo" src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt="amazon logo" />
      {/* the below is the search bar present at the top of the webpage  */}
      <div className="header_search">
        <input type="text" className='header_inputsearch' />
        <SearchIcon className="header_searchicon" />
        {/* below is the searh LOGO present with the search bar */}
      </div>

      {/* it is the the options present next to the serach bar on the top of  the webpage */}
      <div className="header_nav">
        {/* we are making the seperate div for each option insode which we will enclose the span which will have the options */}
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
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className='header_optionTwo header_basketcount'>0</span>
        </div>
      </div>

    </div>
  )
}

export default Header
