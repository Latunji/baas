import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../sidebar/Sidebar1";
import classes from "./Userinfo.module.css";

const BusinessInfo = () => {
  return (
    <main className={classes.userinfo}>
      <Sidebar />
      <div className={classes.info}>
        <div className={classes.currentpage}>
          <h1>Business Information (for KYCB)</h1>
          <span>Provide your personal information, so we can get to know you.</span><br />
        </div>
        <div className={classes.formsection}>
          <div className={classes.profileform}>
            <label>Business name</label>
            <input type="fullname" placeholder="full name" />
            <br />
            <label>Business phone number</label>
            <input type="fullname" placeholder="DD/MM/YYY" />
            <br />
            <label>Business website</label>
            {/* <select placeholder="+234">+234</select> */}
            <input type="phone" placeholder="www.baas.com" />
            <br />
            <label>Business type</label>
            <select type="id_type" placeholder="bussiness type" />
          </div>

          <div className={classes.profileform}>
            <label>Business registration number</label>
            <select type="gender" placeholder="Reg No" />
            <br />
            <label>Business email</label>
            <select type="nationality" placeholder="email" />
            <br />
            <label>Business address</label>
            <input type="address" placeholder="address" />
            <br />
            <label>Business industry</label>
            <input type="id-no" placeholder="Finance" />
          </div>
        </div>
        <div className={classes.btn}>
          <div className={classes.link}>
            <Link to='/setupProfile'><p>back</p></Link>
          </div>
          <div>
            <Link to='/financialInfo' className='link'>
              <button>Next</button>
            </Link>
          </div>
        </div>
        <p className={classes.footer}>Baas 2023</p>
      </div>
    </main>
  );
}

export default BusinessInfo