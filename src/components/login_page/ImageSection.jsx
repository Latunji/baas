import React from 'react'
import classes from "./ImageSection.module.css";
import image from "../assets/image.png";
import TextOverlay from './TextOverlay';

function ImageSection() {
  return (
    <div className={classes.image_section}>
      <img src={image} alt="image" />
        <TextOverlay />
    </div>
  );
}

export default ImageSection;