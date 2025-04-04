import React from 'react';
import './CSS/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div class="login">
      <div class="login-container">
        <h1>Login</h1>
        <div className='login-fields'>
          <input type="text" placeholder='Your Name' required/>
          <input type="email" placeholder='Email Address' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <div>
          <div className='login-agree'>
            <input type="checkbox" name='' id='' required/>
            <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
        </div>
        <button>Continue</button>
        <p className='login-login'>
          Already have an account? <Link to="/signup" style={{textDecoration:"none"}}><span>Signup here</span></Link>
        </p>
      </div>
    </div>
  )
}

export default Login
