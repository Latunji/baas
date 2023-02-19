import React from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import classes from "./SignUpForm.module.css";
import Header from "../Header/Header";
import SignUpImageSection from "./SignUpImageSection";

function SignUpPage() {
  return (
    <div className={classes.signin_body}>
      <div className={classes.form}>
        <Header/>
        <SignUpForm/>
      </div>
      <SignUpImageSection/>
    </div>
  );
}

export default SignUpPage;
