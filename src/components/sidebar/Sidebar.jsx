import {React,useState}from 'react';
import logo from '../assets/logo.png'
import './Sidebar.css';
import email from '../assets/email.png'
import { AccountSetting, SidebarData } from '.';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [select, setSelect] = useState(0);
    



  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">

        <div className="menu_general">
          <p>General</p>
          {SidebarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index ? " menu-item active" : "menu-item"
                }
                key={index}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <span>
                  <p className="heading"><span> <img src={item.icon} alt="icons" className='icon' /></span>{item.heading}</p>
                </span>
              </div>
            );
          })}
        </div>
        <div className="menu_account">
          <p>Account</p>
          {AccountSetting.map((item, index) => {
            return (
              <div
                className={
                  select === index ? " menu-item active" : "menu-item"
                }
                key={index}
                onClick={() => {
                  setSelect(index);
                }}
              >
             
                  <p className="heading"><span>
                  <img src={item.icon} alt="icons" className='icon' />{item.heading}</span></p>
        
              </div>
            );
          })}
        </div>
        <div className="user">
          <img src={email} />
          <div className="username">
            <h2>Opeoluwa Samuel</h2>
            <p>Admin</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar