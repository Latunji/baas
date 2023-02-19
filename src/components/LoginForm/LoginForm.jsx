import React from 'react';
import gmail from"../assets/gmail.png"
import classes from "./LoginForm.module.css";

function LoginForm() {
  return (
    

    <div className={classes.signin__form__body}>
      <div className={classes.welcome_message}>
        <h1>Welcome Back</h1>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <div className={classes.fillform}>
        <form>
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label for="password">Password</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            name="password"
          />
          <div className={classes.save__login}>
            <label>
             <input type="checkbox" id='save'></input>
             <span className={classes.remember_me}> Remember me for the next 30 days.</span> <span className={classes.forgot_p}><a href="#">forgot password</a></span>
            </label>
          </div>
          <button className={classes.signin_button}>Sign In</button>
          <button className={classes.google_signin}>
            <img src={gmail} alt="gmail" />
            Sign in with Google
          </button>
          <div className={classes.signup_link}>
            <p>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm