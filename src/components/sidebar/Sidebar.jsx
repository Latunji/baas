import {React,useState}from 'react';
import logo from '../assets/logo.png'
import './Sidebar.css';
import email from '../assets/email.png'
import { SidebarData } from '.';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    



  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? " menu-item active" : "menu-item"}
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <span>
                <img src={item.icon} alt="icons" />
                <span className='heading'>{item.heading}</span>
              </span>
            </div>
          );
        })}
        <div className="user">
          <img src={email} />
          <div className='username'>
            <h2>Opeoluwa Samuel</h2>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar