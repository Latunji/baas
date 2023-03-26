import {React, useState} from 'react';
import { Notification } from './index';
import './Topbar.css'

const Topbar = () => {

    const [search, setSearch] = useState(false);
  return (
    <nav className='topbar'>
        <h1>Dashboard</h1>
        <div className='notification-section'>
            {Notification.map((item, index) => {
                return (
                    <span>
                        <img src={item.icon} alt="icons"/>
                    </span>
                )
            })}
        </div>
    </nav>


  )
}

export default Topbar