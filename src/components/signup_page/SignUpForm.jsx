import React from 'react';
import gmail from"../assets/gmail.png"
import classes from "./SignUpForm.module.css";
import { Link } from 'react-router-dom';

function SignUpForm() {
  return (
    <div className={classes.signin__form__body}>
      <div className={classes.welcome_message}>
        <h1>Sign Up</h1>
        <p>Welcome! Enter email address to begin.</p>
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

          <div className={classes.save__login}>
            <label>
              <input type="checkbox" id="save"></input>
              <span className={classes.remember_me}>I agree to the </span>{" "}
              <span className={classes.forgot_p}>
                <a href="#">terms and conditions</a>
              </span>
            </label>
          </div>
          <button className={classes.signin_button}>
            <Link className="link" to="/setupProfile">
              Continue
            </Link>
          </button>
          <button className={classes.google_signin}>
            <Link className="glink" to="/setupProfile">
              <img src={gmail} alt="gmail" />
            </Link>
            Sign in with Google
          </button>
          <div className={classes.signup_link}>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <a href="#">Sign In</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm