import React from 'react';
import classes from "./Userinfo.module.css";
import Sidebar from '../sidebar/Sidebar';


const KYC = () => {
  return (
    <main className={classes.userinfo}>
      <Sidebar />
      <div className={classes.info}>
        <div className={classes.currentpage}>
          <h1>KYC and AML</h1>
          <p>(Anti-Money Laundering) Compliance Check.</p>
        </div>
        <div className={classes.kyc_sec}>
          <div className={classes.kyc}>
            <input
              type="checkbox"
              placeholder="verification of personal and business information"
            />
            <label>
              Consent for verification of personal and business information
            </label>
          </div>
          <div className={classes.kyc}>
            <input type="checkbox" placeholder="regulation" />
            <label>
              Consent for sharing information with regulatory authorities as
              required
            </label>
          </div>
        </div>
        <div className={classes.btn}>
          <button>Next</button>
        </div>
        <p className={classes.footer}>Baas 2023</p>
      </div>
    </main>
  );
}

export default KYC