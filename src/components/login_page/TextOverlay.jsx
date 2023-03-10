import React from 'react';
import classes from './TextOverlay.module.css'
import right from "../assets/right.png";
import left from "../assets/left.png";

function TextOverlay() {
  return (
    <div className={classes.overlay}>
      <hi>Streamline Your B2B Payments with Confidence and Convenience.</hi>

      <h1>Opeoluwa Adeyemi</h1>
      <p>Product Designer, Hourglass</p>
      <div className={classes.buttons}>
        <p>Web Design Agency</p>
        <img src={right} alt="right" />
        <img src={left} alt="left" />
      </div>
    </div>
  );
}

export default TextOverlay