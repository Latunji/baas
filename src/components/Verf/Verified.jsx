import React from 'react';
import Nav from "./Nav";
import classes from "./Verification.module.css";
import verified from '../assets/verified.png';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Verified = () => {
  return (
    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={verified} alt="" />
        <h1>Email Verified</h1>
        <p>Your email has been successfully verified, click below to login magically.</p>
        <Link className="link" to="/setupProfile">
          <button className="button">
            Go To Dashboard
          </button>
        </Link>
      </div>
    </div>



  );
}

export default Verified;