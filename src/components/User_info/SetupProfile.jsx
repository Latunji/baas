import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import classes from './Userinfo.module.css'

const SetupProfile = () => {
  return (
    <main className={classes.userinfo}>
      <Sidebar />
      <div className={classes.info}>
        <div className={classes.currentpage}>
          <h1>Personal Information</h1>
          <p>youremail@gmail.com</p>
          <p>Provide your personal information, so we can get to know you. </p>
        </div>
        <div className={classes.formsection}>
          <div className={classes.profileform}>
            <label>Full Name</label>
            <input type="fullname" placeholder="full name" />
            <label>DOB</label>
            <input type="fullname" placeholder="DD/MM/YYY" />
            <label>Phone Number</label>
            {/* <select placeholder="+234">+234</select> */}
            <input type="phone" placeholder="Phone Number" />
            <label>ID Type</label>
            <select type="id_type" placeholder="NIIN" />
            <label>Occupation</label>
            <input type="occupation" placeholder="occupation" />
          </div>

          <div className={classes.profileform}>
            <label>Gender</label>
            <select type="gender" placeholder="Gender" />
            <label>Nationality</label>
            <select type="nationality" placeholder="nationality" />
            <label>Address</label>
            <input type="address" placeholder="address" />
            <label>ID Number</label>
            <input type="id-no" placeholder="ID Number" />
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

export default SetupProfile;