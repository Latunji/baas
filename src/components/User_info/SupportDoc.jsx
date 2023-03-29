import React from 'react';
import Sidebar1 from '../sidebar/Sidebar1';
import classes from './Userinfo.module.css'
import { DocData, UpData } from './db';
import Upload from './Upload';
import { Link } from "react-router-dom";

const SupportDoc = (props) => {
  return (
    <main className={classes.userinfo}>
      <Sidebar1 />

      <div className={classes.info}>
      <div className={classes.currentpage}>
        <h1>Supporting Documents</h1>
        <p>Upload your documents for verification.</p>
        </div>
        <div className={classes.info2}>
          {DocData.map((indx) => {
            return (
              <div className={classes.doc}>
                <Upload
                  title={indx.name}
                  image={indx.icon}
                  heading={indx.heading}
                  size={indx.size}
                  uploaded={indx.uploaded}
                />
              </div>
            );
          })}
        </div>
        <div className={classes.info2}>
          {UpData.map((indx) => {
            return (
              <div className={classes.doc}>
                <Upload
                  title={indx.name}
                  image={indx.icon}
                  heading={indx.heading}
                  size={indx.size}
                  uploaded={indx.uploaded}
                />
              </div>
            );
          })}
        </div>
        <div className={classes.btn}>
          <Link to="/setupProfile">
            <p>back</p>
          </Link>
          <Link className="link" to="/dashboard">
            <button>Next</button>
          </Link>
        </div>
        <p className={classes.footer}>Baas 2023</p>
      </div>
    </main>
  );
}

export default SupportDoc