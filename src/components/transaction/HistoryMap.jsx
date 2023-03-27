import { React, useState } from 'react';
import HistoryMapData from './HistoryMapData';
import "../Dashboard/dash/Dashboard.css";
import { Transaction } from './Transaction';

const HistoryMap = () => {
    // const [selected, setSelected] = useState(0)
    return (
        <div className="histories2">
            <div className='search'>
                <div>
                <input type="text" className='search_input' placeholder="Search Transaction ID" />
                </div>
                <div>
                <select className='select'>
                    <option>Sort By</option>
                </select>
                <select className='select'>
                <option>Filter By</option>
                </select>
                </div>
            </div>
            <div>
                <br />
                <div className=''>
                    <table>
                        <tr className='tableHead'>
                            <th>...</th>
                            <th>Transaction ID</th>
                            <th>Recipient Name</th>
                            <th>Account Number</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Channel</th>
                            <th>Status</th>
                        </tr>
                        {Transaction.map((history, id) => {
                    return (
                        < HistoryMapData
                            icon={history.icon}
                            transactionId={history.transactionId}
                            subject={history.subject}
                            accountNumber={history.accountNumber}
                            date={history.date}
                            amount={history.amount}
                            channel={history.channel}
                            status={history.status}
                        />
                    );
                })}
                    </table>
                </div>
                
            </div>
        </div>
    );
}

export default HistoryMap