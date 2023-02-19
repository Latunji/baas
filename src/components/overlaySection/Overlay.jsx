import React from 'react';
import classes from "./Overlay.module.css"
import TextOverlay from './TextOverlay';

function Overlay() {
  return (
    <div className={classes.overlay_section}>
      <TextOverlay/>
    </div>
  );
}

export default Overlay;