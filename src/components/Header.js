import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';//this is the icon present inside the search bar
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';//this is the icon present at the end of the nav,with the count of the product in the basket
import { Link } from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
  //here we have the basket and the user inside the {} as we have pushed both the basket product and the logged user into the data layer
  const [{ basket, user }, dispatch] = useStateValue();

  //it handles the sign out funtion 
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    // Below is the main header of the webpage
    <div className='header'>

      <div className="header_logo_container">
        <Link to="/">
          {/* it is  the amazon logo inside the navbar of the webpage */}
          <img className="header_logo" src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt="amazon logo" />
        </Link>

      </div>

      {/* the below is the search bar present inside the navbar at the top of the webpage  */}
      <div className="header_search">
        <input type="text" className='header_inputsearch' />
        {/* below is the searh LOGO present with the search bar,as we had added the material UI package so directly adding the logo  */}
        <SearchIcon className="header_searchicon" />
      </div>

      {/* it is the the options present next to the serach bar on the top of  the webpage */}
      <div className="header_nav">
        {/* we are making the seperate div for each option inside which we will enclose the span which will have the options */}
        {/* by doing the !user && now we will only get redirected to the login page if we have no user */}
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className='header_optionOne'>Hello,{user?.email}</span>
            {/* in the above line "?." is the optional chaning */}
            {/* if the user exist the sign out else sign in */}
            <span className='header_optionTwo'>{user ? 'Log Out' : 'Sign In'}</span>
          </div>
        </Link>
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
            {/* in the below line the ? in the basket?.length says that if the basket have an error then the error will be handled properly */}
            <span className='header_optionTwo header_basketcount'>{basket?.length}</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header


