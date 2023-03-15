import React from 'react';
import classes from './TextOverlay.module.css'
import right from "../assets/right.png";
import left from "../assets/left.png";

function TextOverlay() {
  return (
    <div className={classes.overlay}>
      <h1>Streamline Your B2B Payments with Confidence and Convenience.</h1>

      <h1>Opeoluwa Adeyemi</h1>
      <p>Product Designer, Hourglass<br/> <span>Web Design Agency</span></p>
  
      <div className={classes.buttons}>
        <img src={right} alt="right" />
        <img src={left} alt="left" />
      </div>
    </div>
  );
}

export default TextOverlay