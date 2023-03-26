import React from 'react';
import Nav from "./Nav";
import classes from "../Verf/Verification.module.css";
import verified from "../assets/verified.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="forgotpassword">
      <div className="top-bar">
        <img src={Logo} alt="logo" />
      </div>
      <div className="forgot-form">
        <img src={verified} alt="verified" />
        <h1>Password Reset</h1>
        <p>Your password has been successfully reset. <br /> Click below to log in magically</p>
        <Link className="link" to="/login"><button className={classes.button}> Continue</button></Link>
      </div>
    </div>



  );
}

export default PasswordReset