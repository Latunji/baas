import React from 'react';
import './Dashboard.css';
import Cards from './Cards';
import chart from "../../assets/dashboard/chart.png"
import People from './People';
import Histories from './Histories';

const Dashboard = () => {

  return (
    <main className="dashboard">
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
            <Histories/>
    </main>
  );
}

export default Dashboard;