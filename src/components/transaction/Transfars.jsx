import React from 'react'
import { TransfarHistory } from './TransfarData';
import History from '../Dashboard/dash/History';
import './Modal.css'


function Transfars() {
  return (
    <div className="transfar-history">
      <div>
        {TransfarHistory.map((history,id) =>{
            return (
              < History
                icon ={history.icon}
                subject ={history.subject}
                time = {history.time}
                date = {history.date}
                amount = {history.amount}
                status = {history.status}
              />
            );
        })}
      </div>
    </div>
  );
}

export default Transfars
