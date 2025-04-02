import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

function Navbar() {
  const[menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>Cloth Shop</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="shop"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none"}} to="/mens">Mens</Link>{menu==="men"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}} to="/womens">Womens</Link>{menu==="women"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:null}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>0</div>

        </div>
    </div>
  )
}

export default Navbar;
