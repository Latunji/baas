import React from 'react'
import './Dashboard.css'
const History = (props) => {
  return (
    <div key={props.id} className="history">
        <div className='historyContent'>
            <img src={props.icon} />
            <div className='subject'>{props.subject}</div>
            <div className='time'>{props.time}</div>
            <div className='date'>{props.date}</div>
            <div className='amount'>{props.amount}</div>
            <div className='status'>{props.status}</div>
        </div>
    </div>
  );
}

export default History

