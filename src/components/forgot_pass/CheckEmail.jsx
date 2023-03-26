import React from 'react';
import Nav from "./Nav";
import classes from "../Verf/Verification.module.css";
import verified from "../assets/verified.png";
import right from '../assets/right.png';
import Logo from '../assets/logo.png';
import key from '../assets/passkey.png';
import email from '../assets/email.png';
import { Link } from "react-router-dom";

const CheckEMail = () => {
  return (
    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={email} alt="" />
        <h1>Check Your Email</h1>
        <p>We sent a password reset link to your email</p>
        <Link className="link" to="/newPassword">
        <button className="button">
            Open email app
        </button>
        </Link>
        <p>Didn't receive the email? click to resend</p>
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

export default CheckEMail