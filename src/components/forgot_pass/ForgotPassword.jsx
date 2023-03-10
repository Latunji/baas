import React from 'react';
import Logo from '../assets/logo.png';
import key from '../assets/passkey.png'
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={key} alt="" />
        <label>Enter Email</label>
        <input type="text" placeholder="*******" />
        <button className='button'>Continue</button>
      </div>
    </div>
  );
}

export default ForgotPassword