import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../sidebar/Sidebar1";
import classes from "./Userinfo.module.css";

const FinancialInfo = () => {
  return (
    <main className={classes.userinfo}>
      <Sidebar />
      <div className={classes.info}>
        <div className={classes.currentpage}>
          <h1>Financial Information</h1>
          <p>youremail@gmail.com</p>
          <p>Provide your financial information, so we can know your status and run a check. </p>
        </div>
        <div className={classes.formsection}>
          <div className={classes.profileform}>
            <label>Income</label>
            <select type="income" placeholder="#10,000,000" />
            <label>Source of funds</label>
            <input type="SOF" placeholder="Grant" />
          </div>

          <div className={classes.profileform}>
            <label>Networth</label>
            <select type="gender" placeholder="#270,000" />
            <label>Purpose of account</label>
            <select type="investment" placeholder="Investment" />
          </div>
        </div>
        <div className={classes.btn}>
          <Link to='/setupProfile'><p>back</p></Link>
          <Link className='link' to='/kyc'>
          <button>Next</button>
          </Link>
          
        </div>
        <p className={classes.footer}>Baas 2023</p>
      </div>
    </main>
  );
}

export default FinancialInfo;