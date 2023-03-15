import React from 'react'
import classes from './Userinfo.module.css'

const Upload = (props) => {
  return (
    <div className="upload">
      <div className={classes.title}>{props.title}</div>
      <img src={props.icon} alt="logo.png" className={classes.icon} />
      <div className={classes.heading}>{props.heading}</div>
      <div className={classes.size}>{props.size}</div>
      <div className={classes.uploaded}>{props.uploaded}</div>
    </div>
  );
}

export default Upload