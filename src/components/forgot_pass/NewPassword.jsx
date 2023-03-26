import React from "react";
import Logo from "../assets/logo.png";
import key from "../assets/passkey.png";
import "./ForgotPassword.css";
import right from '../assets/right.png';
import classes from "../Verf/Verification.module.css";
import email from '../assets/email.png';
import Nav from "./Nav";
import { Link } from "react-router-dom";

const NewPassword = () => {
  return (
    <div className="forgotpassword">
<div className="top-bar">
  <img src={Logo} alt="logo" />
</div>
<div className="forgot-form">
<img src={email} alt="verified" />
  <h1>Set New Password</h1>
  <p>Your new password must be different to previously used passwords.</p>
  <div className="forgot-form">
        <label>Password</label>
        <input type="text" placeholder="*******" />
        <label>Confirm Password</label>
        <input type="text" placeholder="*******" />
        <Link className="link" to="/passwordReset">
          <button className="button">
            Continue
        </button>
        </Link>
        <Link className="link1" to="/login">
          <span className="back">
            <img src={right} alt="left.png" />
            <p>Back to log in</p>
          </span>
        </Link>
      </div>
</div>
</div>


  );
};

export default NewPassword;
