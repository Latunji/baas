import React from 'react';
import Nav from "./Nav";
import key from '../assets/passkey.png';
import right from '../assets/right.png';
import Logo from '../assets/logo.png';
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (

    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={key} alt="" />
        <h1>Check Your Email</h1>
        <p>We sent a verification link to your email</p>
        <Link className="link" to="/verification">
        <button className="button">
            Enter Otp
        </button>
        </Link>
        <div className='login_btn'>
        <Link className='link1' to='/login'>
          <span className="back">
            <img src={right} alt="left.png" />
            <p>Back to log in</p>
          </span>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification