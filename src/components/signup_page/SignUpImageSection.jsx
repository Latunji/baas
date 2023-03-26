import React from 'react'
import classes from "./signUpImageSection.module.css";
import image from "../assets/img2.png";
import Overlay from './signUpOverlay';

function SignUpImageSection() {
  return (
    <div className={classes.image_section}>
      <img src={image} className={classes.image} alt="image" />
     
    </div>
  );
}

export default SignUpImageSection;