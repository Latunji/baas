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
    <main>
      <Nav />
      <section className={classes.check_email}>
    <img src={email} alt="verified" />
        <h1>Set new password</h1>
        <p>Your new password must be different to previously used passwords.</p>
      <div className="forgot-form">
        <label>Password</label>
        <input type="text" placeholder="*******" />
        <label>Confirm Password</label>
        <input type="text" placeholder="*******" />
        <button className="button">
          <Link className="link" to="/passwordReset">
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
    </section>
    </main>
  );
};

export default NewPassword;
