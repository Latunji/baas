import { React, useState } from "react";
import Nav from "./Nav";
import classes from "./Verification.module.css";
import email from "../assets/email.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import Otp from "./Otp";

function Verification() {

  
  const handleOtp = () => {
  };
  return (
    <main>
      <Nav />
      <section className={classes.check_email}>
        <img src={email} alt="email" />
        <h1>Check your email</h1>
        <p>We sent a verification link to your email</p>
        <div className={classes.otp}>
          <input type="text" placeholder="3" />
          <input type="text" placeholder="0" />
          <input type="text" placeholder="9" />
          <input type="text" placeholder="7" />
        </div>
        <button className={classes.button}> <Link className="link" to="/verified">Enter Otp</Link></button>
        
        <p>
          Didn't receive the email? click to resend
        </p>
        <div className={classes.back}>
          <img src={arrow} alt="arrow" />
          <p>go back to login</p>
        </div>
      </section>
    </main>
  );
}

export default Verification;
