import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import key from '../assets/passkey.png'
import './ForgotPassword.css';
import right from '../assets/right.png';

const ForgotPassword = () => {
  return (
    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={key} alt="" />
        <h1>Enter Email</h1>
        <p>We sent a password reset link to oopeoluwa@gmail.com</p>
        <input type="text" placeholder="Enter your email" />
        <button className="button">
          <Link className="link" to="/newPassword">
            Continue
          </Link>
        </button>
        <Link className='link1' to='/login'>
          <span className="back">
            <img src={right} alt="left.png" />
            <p>Back to log in</p>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword