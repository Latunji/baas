import React from 'react';
import Nav from "./Nav";
import classes from "../Verf/Verification.module.css";
import verified from "../assets/verified.png";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <main>
      <Nav />
      <section className={classes.check_email}>
        <img src={verified} alt="verified" />
        <h1>Password Reset</h1>
        <p>Your password has been successfully reset. <br/> Click below to log in magically</p>
    
        <button className={classes.button}> <Link className="link" to="/login">Continue</Link></button>
      </section>
    </main>
  );
}

export default PasswordReset