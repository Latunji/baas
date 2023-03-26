import {React,useState}from 'react';
import logo from '../assets/logo.png'
import './Sidebar.css';
import email from '../assets/email.png'
import { Link } from 'react-router-dom';
import { AccountSetting, SidebarData } from '.';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [select, setSelect] = useState(0);
    



  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">

        <ul className="menu_general">
          <p>General</p>
          {SidebarData.map((item, index) => {
            return (
              <div className="menu-items">
                <Link to={item.path}>
                  <div className={selected === index ? " item active" : "item"
                    } key={index} onClick={() => {setSelected(index);}}>
                    <span>
                      <img src={item.icon} alt="icons" />
                      <span className="title">{item.heading}</span>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </ul>
        <div className="menu_account">
          <p>Account</p>
          {AccountSetting.map((item, index) => {
            return (
              <div
                className={
                  select === index ? " item active" : "item"
                }
                key={index}
                onClick={() => {
                  setSelect(index);
                }}
              >
                <Link to={item.path}>
                  <span>
                    <img src={item.icon} alt="icons" />
                    <span className="heading">{item.heading}</span>
                  </span>
                </Link>
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
    </nav>
  );
}

export default Sidebar