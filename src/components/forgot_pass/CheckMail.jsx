import React from 'react';
import Nav from "./Nav";
import classes from "./Verification.module.css";
import verified from "../assets/verified.png";
import { Link } from "react-router-dom";

const CheckMail = () => {
  return (
    <main>
      <Nav />
      <section className={classes.check_email}>
        <img src={verified} alt="verified" />
        <h1>Check your email</h1>
        <p>We sent a verification link to your email</p>
        <button className={classes.button}>Go To Dashboard</button>
      </section>
    </main>
  );
}

export default CheckMail