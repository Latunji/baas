import React from 'react';
import classes from "../overlaySection/TextOverlay.module.css";
import avatar from "../../components/assets/avatar-group.png";

function signUpTextOverlay() {
  return (
    <div className={classes.overlay}>
      <div>
        <div className={classes.text}>
          <p>Start turning your ideas into reality</p>
        </div>
      </div>
      <div className={classes.info}>
        <p>Create a free account and get full access to all <br/>
        features for 30-days. No credit card needed.<br/>
        Get started in 2 minutes.</p>
        <p><img src={avatar}></img> <span>Join 40,000+ users</span></p>
        
       
      </div>
      
    </div>
  );
}

export default signUpTextOverlay