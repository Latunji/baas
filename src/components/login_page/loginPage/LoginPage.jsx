import React from "react";
import LoginForm from "../../LoginForm/LoginForm";
import classes from "./LoginPage.module.css";
import Header from "../../Header/Header";
import ImageSection from "../../overlaySection/ImageSection";

function LoginPage() {
  return (
    <div className={classes.signin_body}>
      <div className={classes.form}>
        <Header/>
        <LoginForm/>
      </div>
      <ImageSection/>
    </div>
  );
}

export default LoginPage;
