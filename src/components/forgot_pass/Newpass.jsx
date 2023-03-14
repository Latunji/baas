import React from "react";
import Logo from "../assets/logo.png";
import key from "../assets/passkey.png";
import "./ForgotPassword.css";
import right from '../assets/right.png'
import { Link } from "react-router-dom";

const Newpass = () => {
  return (
    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={key} alt="" />
        <label>Enter New Password</label>
        <input type="text" placeholder="*******" />
        <label>Confirm Password</label>
        <input type="text" placeholder="*******" />
        <button className="button">
          <Link className="link" to="/dashboard">
            Continue
          </Link>
        </button>
        <Link className="link1" to="/login">
          <span className="back">
            <img src={right} alt="left.png" />
            <p>Back to log in</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Newpass;
