import logo from "../assets/logo.png";
import React from 'react'
import classes from "./Header.module.css"

function Header() {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header