import React from "react";
import LoginForm from "../../LoginForm/LoginForm";
import classes from "./LoginPage.module.css";
import Header from "../../Header/Header";
import ImageSection from "../../overlaySection/ImageSection";

function LoginPage() {
  return (
    <div className="container">
      <div className="App">
        <div className={classes.signin_body}>
          <div className={classes.form}>
            <Header />
            <LoginForm />
          </div>
          <ImageSection />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
