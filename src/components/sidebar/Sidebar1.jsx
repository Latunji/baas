import React from 'react';
import { SignUpData } from '.';
import './Sidebar.css'
import logo from '../assets/logo.png'

const Sidebar1 = () => {
  return (
    <div className="signup-menu">
      <div className="logo">
        <img src={logo} alt="logo.png" />
      </div>
      <div className='stages'>
        {SignUpData.map((form) => {
          return <div>{form.heading}</div>;
        })}
      </div>
    </div>
  );
}

export default Sidebar1