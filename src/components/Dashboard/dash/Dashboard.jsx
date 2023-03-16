import React from 'react';
import './Dashboard.css';
import Cards from './Cards';
import Topbar from './Topbar';
import Payment from './Payment';

import chart from "../../assets/dashboard/chart.png"
import People from './People';
import Histories from './Histories';
import Sidebar from '../../sidebar/Sidebar';

const Dashboard = () => {




  return (
    <main className="dashboard">
      <Sidebar/>
      <div className="dash">
        <Topbar />
        <div className="dash-content">
          <div className="chart-section">
            <Cards />
            <div className="mid-dash">
              <People/>
              <div className="chart">
                <div className="timeline">
                  <h1>Highlight</h1>
                  <button typeof="text">month</button>
                </div>
                <img src={chart} alt="chart.png" />
              </div>
            </div>
            <Histories

            />
          </div>

          <div className="credit-card">
            {" "}
            <Payment />{" "}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;