import React from 'react';
import './Dashboard.css';
import Cards from './Cards';
import Topbar from './Topbar';
import Payment from './Payment';
import { PeopleData } from '.';
import chart from "../../assets/dashboard/chart.png"

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Topbar />
      <div className="dash-content">
        <div className="chart-section">
          <Cards />

          <div className="mid-dash">
            <div className="people">
              {PeopleData.map((people) =>{
                return(
                  <div className="data">
                    <img src ={people.icon}alt="icon"/>
                    <div className="amount-data">
                      <div className="amount">{people.amount}</div>
                      <div className="text">{people.title}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="chart">
              <div className="timeline">
                <h1>Highlight</h1>
                <button typeof='text'>month</button>
              </div>
              <img src={chart} alt="chart.png"/>
            </div>
          </div>
          <div className="history">
            <h1>History</h1>
            
          </div>
        </div>



        <div className="credit-card"> <Payment/> </div>
      </div>
    </section>
  );
}

export default Dashboard;