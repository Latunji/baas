import React from 'react'
import './components.css'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from './dash/Dashboard'


const Components = () => {
  return (
    <div className="component">
      <Sidebar />
      <div className="dashboard-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default Components