import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {
  const[menu,setMenu] = useState("shop");
  const{getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <Link onClick={()=>{setMenu("shop")}} style={{textDecoration:"none"}} to="/">
          <div className='nav-logo'>
              <img src={logo} alt=""/>
              <p>Cloth Shop</p>
          </div>
        </Link>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="shop"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none"}} to="/mens">Mens</Link>{menu==="men"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}} to="/womens">Womens</Link>{menu==="women"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:null}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"><button onClick={()=>{setMenu("")}}>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" onClick={()=>{setMenu("")}}/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>

        </div>
    </div>
  )
}

export default Navbar;
