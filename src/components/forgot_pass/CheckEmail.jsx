import React from 'react';
import Nav from "./Nav";
import classes from "../Verf/Verification.module.css";
import verified from "../assets/verified.png";
import right from '../assets/right.png';
import email from '../assets/email.png';
import { Link } from "react-router-dom";

const CheckEMail = () => {
  return (
    <main>
      <Nav />
      <section className={classes.check_email}>
        <img src={email} alt="verified" />
        <h1>Check your email</h1>
        <p>We sent a password reset link to your email</p>
        <button className="button">
          <Link className="link" to="/newPassword">
            Open email app
          </Link>
        </button>
        <p>Didn't receive the email? click to resend</p>
        <Link className='link1' to='/login'>
          <span className="back">
            <img src={right} alt="left.png" />
            <p>Back to log in</p>
          </span>
        </Link>
      </section>
    </main>
  );
}

export default CheckEMail