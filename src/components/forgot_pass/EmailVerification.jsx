import React from 'react';
import Nav from "./Nav";
import classes from "../Verf/Verification.module.css";
import verified from "../assets/verified.png";
import right from '../assets/right.png';
import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (
    <main>
      <Nav />
      <section className={classes.check_email}>
        <img src={verified} alt="verified" />
        <h1>Check your email</h1>
        <p>We sent a verification link to your email</p>
        <button className="button">
          <Link className="link" to="/verification">
            Enter OTP
          </Link>
        </button>
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

export default EmailVerification