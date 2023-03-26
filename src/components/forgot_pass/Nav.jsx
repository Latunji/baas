import React from 'react'
import logo from '../assets/logo.png';
import classes from './Nav.module.css'

function Nav() {
  return (
      <div className={classes.nav}>
        <img src={logo} alt="logo" />
      </div>
  );
}

export default Nav
