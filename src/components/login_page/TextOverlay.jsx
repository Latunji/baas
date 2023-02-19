import React from 'react';
import classes from "./TextOverlay.module.css";
import right from "../assets/right.png";
import left from "../assets/left.png";

function TextOverlay() {
  return (
    <div className={classes.overlay}>
      <div>
        <div className={classes.text}>
          <h4>Streamline Your B2B Payments with Confidence and Convenience.</h4>
        </div>
      </div>
      <div className={classes.info}>
        <h6>Opeoluwa Adeyemi</h6>
        <p>Product Designer, Hourglass</p>
        <p>Web Design Agency</p>
        <div className={classes.buttons}>
          <button>
            <img src={right} alt="right" />
          </button>
          <button>
            <img src={left} alt="left" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextOverlay