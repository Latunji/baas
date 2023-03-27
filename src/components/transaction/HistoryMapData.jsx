import React from 'react'
import '../Dashboard/dash/Dashboard.css';
import { Link } from 'react-router-dom';

const HistoryMapData = (props) => {
    return (
            <Link to="/transactionDetails" className='lin'><tr key={props.id} className="tableRow">
            <td><img src={props.icon} /></td>
            <td>{props.transactionId}</td>
            <td>{props.subject}</td>
            <td>{props.accountNumber}</td>
            <td>{props.date}</td>
            <td>{props.amount}</td>
            <td>{props.channel}</td>
            <td>{props.status}</td>
            </tr></Link>
    );
}

export default HistoryMapData

