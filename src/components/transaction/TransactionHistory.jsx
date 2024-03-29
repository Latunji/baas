import {React, useState} from 'react';
import TransactionOptions from './TransactionOptions';
import Bills from '../transaction/BillPayment/Bills';
import "../transaction/Transactions.css";
import Topbar from '../Dashboard/dash/Topbar';
import Sidebar from "../sidebar/Sidebar";
import Histories from './HistoryMap';
import Airtime from '../transaction/BillPayment/Airtime';
import '../transaction/BillPayment/Bills.css';


const TransactionHistory = () => {
    
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
return (
  <div className="transaction">
    <Sidebar />
    <div className="">
      <Topbar />
      <div className="">
        <TransactionOptions />
        <br />
        <div className="divider" />
        <Histories/>
      </div>
    </div>
    <div className="modal_container">
      {openModal1 && <Airtime closeModal={setOpenModal1} value={false} />}
    </div>
    </div>
)
}

export default TransactionHistory
