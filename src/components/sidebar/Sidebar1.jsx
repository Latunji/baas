import React from 'react';
import { SignUpData } from '.';
import './Sidebar.css'
import logo from '../assets/logo.png'

const Sidebar1 = () => {
  return (
    <nav className="signup-menu">
      <div className="logo">
        <img src={logo} alt="logo.png" />
      </div>
      <div className='stages'>
        {SignUpData.map((form) => {
          return (
          <span >
            <div className='stage'>
              {form.number}
            </div>
            {form.heading}
          </span>
          )
        })}
      </div>
    </nav>
  );
}

export default Sidebar1