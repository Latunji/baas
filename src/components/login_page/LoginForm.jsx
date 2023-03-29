import React from 'react';
import gmail from"../assets/gmail.png"
import classes from "./LoginForm.module.css";
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className={classes.signin__form__body}>
      <div className={classes.welcome_message}>
        <h1>Welcome Back</h1><br/>
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
            <div>
            <label>
              <input type="checkbox" id="save" /> 
              <span className={classes.remember_me}>
                Remember me for 30 days.
              </span>
            </label>
            </div>
            <div>
              <span className={classes.forgot_p}>
                <Link className='link' to='/forgotPassword'>forgot password</Link>
              </span>
              </div>
          </div>
          <Link className='link' to="/dashboard">
            <button className={classes.signin_button}>
              Sign In
            </button>
          </Link>
          <button className={classes.google_signin}>
            <img src={gmail} alt="gmail" />
            <Link className='glink' to="/dashboard">Sign in with Google</Link>
          </button>
          <div className={classes.signup_link}>
            <p>
              Don't have an account?{" "}
              <Link className='link' to="/signUp">
                <a href="">Sign Up</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm