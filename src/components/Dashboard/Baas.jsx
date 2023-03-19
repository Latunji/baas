import React from 'react'
import './Baas.css'
import Sidebar from '../sidebar/Sidebar';
import Dashboard from './dash/Dashboard';
import Payment from './dash/Payment';
import Topbar from './dash/Topbar';

const Baas = () => {
  return (
    <div className="baas">
      <Sidebar />
      <div className="body">
        <Topbar />
        <div className="dashboard_body">
          <Dashboard />
          <Payment />
        </div>
      </div>
      {/* <Transactions/> */}
    </div>
  );
}

export default Baas