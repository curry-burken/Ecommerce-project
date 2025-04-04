import React from 'react';
import './CSS/Signup.css';

function Signup() {
  return (
    <div class="signup">
      <div class="signup-container">
        <h1>Sign Up</h1>
        <div className='signup-fields'>
          <input type="text" placeholder='Your Name' required/>
          <input type="email" placeholder='Email Address' required/>
          <input type="password" placeholder='Password' required/>
        </div>
          <div className='signup-agree'>
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default Signup
