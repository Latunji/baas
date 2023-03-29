import { React, useState } from "react";
import Nav from "./Nav";
// import classes from "./Verification.module.css";
import '../forgot_pass/ForgotPassword.css';
import email from "../assets/email.png";
import arrow from "../assets/arrow.png";
import right from '../assets/right.png';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import Otp from "./Otp";

function Verification() {


  const handleOtp = () => {
  };
  return (
    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={email} alt="" />
        <h1>Check Your Email</h1>
        <p>We sent a verification link to your email</p>
        <div className="otps">
          <input type="text" placeholder="3" />
          <input type="text" placeholder="0" />
          <input type="text" placeholder="9" />
          <input type="text" placeholder="7" />
        </div>
        <Link className="link" to="/verified">
          <button className="button">
            Enter Otp
          </button>
        </Link>
        <p>
          Didn't receive the email? click to resend
        </p>
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

export default Verification;
