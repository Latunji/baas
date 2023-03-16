import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar1';
import classes from './Userinfo.module.css'

const SetupProfile = () => {
  return (
    <main className={classes.userinfo}>
      <Sidebar />
      <div className={classes.info}>
        <div className={classes.currentpage}>
          <h1>Profile Information</h1>
          <p>youremail@gmail.com<br/></p>
          <span>Provide your personal information, so we can get to know you. </span><br/>
        </div>
        <div className={classes.formsection}>
          <div className={classes.profileform}>
            <label>Full Name</label>
            <input type="fullname" placeholder="full name" />
            <br/>
            <label>DOB</label>
            <input type="fullname" placeholder="DD/MM/YYY" />
            <br/>
            <label>Phone Number</label>
            {/* <select placeholder="+234">+234</select> */}
            <input type="phone" placeholder="Phone Number" />
            <br/>
            <label>ID Type</label>
            <select type="id_type" placeholder="NIIN" />
            <br/>
            <label>Occupation</label>
            <input type="occupation" placeholder="occupation" />
          </div>

          <div className={classes.profileform}>
            <label>Gender</label>
            <select type="gender" placeholder="Gender" />
            <br/>
            <label>Nationality</label>
            <select type="nationality" placeholder="nationality" />
            <br/>
            <label>Address</label>
            <input type="address" placeholder="address" />
            <br/>
            <label>ID Number</label>
            <input type="id-no" placeholder="ID Number" />
          </div>
        </div>
        <div className={classes.btn}>
          <Link to='/businessInfo' className='link'>
          <button>Next</button>
          </Link>
          
        </div>
        <p className={classes.footer}>Baas 2023</p>
      </div>
    </main>
  );
}

export default SetupProfile;