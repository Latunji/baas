import React from 'react'
import '../Dashboard/dash/Dashboard.css';
import { Link } from 'react-router-dom';

const HistoryMapData = (props) => {
    return (
            <Link to="/transactionDetails" className='lin'><tr key={props.id} className="tableRow">
            <td className=''><img src={props.icon} /></td>
            <td className='textTable'>{props.transactionId}</td>
            <td className='textTable'>{props.subject}</td>
            <td className='textTable'>{props.accountNumber}</td>
            <td className='textTable'>{props.date}</td>
            <td className='textTable'>{props.amount}</td>
            <td className='textTable'>{props.channel}</td>
            <td className='textTable'>{props.status}</td>
            </tr></Link>
    );
}

export default HistoryMapData

