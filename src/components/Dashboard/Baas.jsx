import React from 'react'
import './Baas.css'
import Sidebar from '../sidebar/Sidebar';
import Dashboard from './dash/Dashboard';
import Payment from './dash/Payment';
import Topbar from './dash/Topbar';

const Baas = () => {
  return (
    <div className="baas">
      <div className="baas_inner">
        <Sidebar />
        <div className="body">
          <Topbar />
          <div className="dashboard_body ">
            <div className="dash grid-col-span">
              <Dashboard />
            </div>
            <Payment />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Baas