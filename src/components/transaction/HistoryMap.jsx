import { React, useState } from 'react';
import HistoryMapData from './HistoryMapData';
import "../Dashboard/dash/Dashboard.css";
import { Transaction } from './Transaction';
import search from "../assets/dashboard/search.png";
import MUIDataTable from "mui-datatables";

const HistoryMap = () => {
    // const [selected, setSelected] = useState(0)
    const columns = ["icon","Recipient Name", "Transaction ID",  "Account Number",  "Channel","Date", "Amount", "Status"];
    const options = {
      };
    return (
        <div className="histories2">
            <div className='search'>
                <div>
                {/* <button type="submit"><img src={search} /></button>  */}
                <input type="text" className='search_input' placeholder="Search Transaction ID" />
                </div>
                <div className='selectBtns'>
                    <select className='select'>
                        <option>Sort By</option>
                    </select>
                    <select className='select'>
                        <option>Filter By</option>
                    </select>
                </div>
            </div>
                <br />
                <div className='table'>
                    <table className='tbl'>
                        <tr className='tableHead'>
                            <th className='logoTable'></th>
                            <th className='logoTable'>Transaction ID</th>
                            <th className='logoTable'>Recipient Name</th>
                            <th className='logoTable'>Account Number</th>
                            <th className='logoTable'>Date</th>
                            <th className='logoTable'>Amount</th>
                            <th className='logoTable'>Channel</th>
                            <th className='logoTable'>Status</th>
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
                <div className='footer'>
                    <div>
                        <p>Page 1 of 10</p>
                    </div>
                    <div className='btmBtn'>
                        <button className='btn'>Previous</button>
                        <button className='btn'>Next</button>
                    </div>
                </div>
        </div>
    );
}

export default HistoryMap