import React from 'react';
import classes from "./signUpOverlay.module.css"
import TextOverlay from './signUpTextOverlay';
import signUpImage from "../../components/assets/img2.png";

function signUpOverlay() {
  return (
    <div className={classes.overlay_section}>
      <img src={signUpImage}></img>
    </div>
  );
}

export default signUpOverlay;