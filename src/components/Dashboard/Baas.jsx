import React from 'react'
import './Baas.css'
import Sidebar from '../sidebar/Sidebar';
import Dashboard from './dash/Dashboard';
import Payment from './dash/Payment';
import Topbar from './dash/Topbar';
import TransactionHistory from '../transaction/History';
import Transactions from "../transaction/Transactions"

const Baas = () => {
  return (
      <div className="baas_inner">
        <Sidebar />
        <div className="body">
          <div className="dashboard_body ">
            {/* <TransactionHistory/> */}
             <div className="dash grid-col-span">
              <Dashboard />
            </div>
            <Payment /> 
            {/* <Transactions/> */}
          </div>
        </div>
      </div>
  );
}

export default Baas