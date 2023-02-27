import React from 'react'
import classes from "./ImageSection.module.css";
import image from "../assets/image.png";
import Overlay from './Overlay';

function ImageSection() {
  return (
    <div className={classes.image_section}>
      <img src={image} alt="image" />
      <Overlay />
    </div>
  );
}

export default ImageSection;