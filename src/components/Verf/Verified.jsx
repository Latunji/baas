import React from 'react';
import Nav from "./Nav";
import classes from "./Verification.module.css";
import verified from '../assets/verified.png'
import { Link } from 'react-router-dom';
const Verified = () => {
  return (
    <main>
      <Nav />
      <section className={classes.check_email}>
        <img src={verified} alt="verified" />
        <h1>Email Verified</h1>
        <p>Your email has been successfully verified, click below to login magically.</p>
        <button className={classes.button}>
        <Link className="link" to="/profileInfo">
          Go To Dashboard
          </Link>
        </button>
      </section>
    </main>
  );
}

export default Verified;