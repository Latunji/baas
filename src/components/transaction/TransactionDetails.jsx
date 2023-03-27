import {React, useState} from 'react';
import "./Transactions.css";
import wema from "../assets/wema.png";
import right from "../assets/right.png";
import Sidebar from "../sidebar/Sidebar";
import { Link } from 'react-router-dom';
import TransactionDetailsModal from './TransactionDetailsModal';
import '../transaction/BillPayment/Bills.css';


const TransactionDetails = () => {
    
  const [openModal, setOpenModal] = useState(false);
return (
  <div className="transaction2">
    <Sidebar />
    <div className="transfar_body">
      <div className="transfar_options">
        <br />
        <div className="" />
        <span className="">
        <div className="transfar"><br /><br />
          <div className="header">
          <Link className='lin' to="/transactionHistory"><span><img src={right} height="20px" /> Transaction Details</span></Link>  
          </div>
          <div className="transfar_pin">
            <img src={wema} alt="verified.png" />
            <h1>To: Oluwasegun James</h1>
            <br />
            <h1>N5000</h1><span>Successful</span>
            <div className="success_msg">
              <div className='success_msg_row'>
                <p>Recipient</p><p>David Ogunmodede<br /><span>Wema Bank(123 456 7890)</span></p>
              </div>
              <div className='success_msg_row'>
                <p>Fee</p><p>N0.00</p>
              </div>
              <div className='success_msg_row'>
                <p>Payment Amount</p><p>N5000</p>
              </div>
            </div>
            <hr className='divider_receipt' />
            <div className='success_msg_row'>
                <p>Recipient</p><p>David Ogunmodede<br /><span>Wema Bank(123 456 7890)</span></p>
              </div>
              <div className="success_msg">
            <div className='success_msg_row'>
            <p>Recipient Bank</p><p>Wema Bank</p>
            </div>
            <div className='success_msg_row'>
            <p>Payment Account Number</p><p>123 456 6890</p>
            </div>
            <div className='success_msg_row'>
            <p>Completion Time</p><p>07:22 Feb 28, 2023</p>
            </div>
            <div className='success_msg_row'>
            <p>Transaction ID</p><p>871G885BDM00</p>
            </div>
            <div className='success_msg_row'>
            <p>Session ID</p><p>132023448484894949</p>
            </div>
            <div className='success_msg_row'>
            <p>Payment Type</p><p>Money Transfer</p>
            </div>
            <div className='success_msg_row'>
            <p>Payment Method</p><p>Balance</p>
            </div>
            
            </div>
            <input type="button" onClick={() => {
                setOpenModal(true);
              }} value="View Receipt" />
          </div>
        </div>
        </span>
      </div>
    </div>
    <div className="modal_container">
      {openModal && <TransactionDetailsModal closeModal={setOpenModal} value={false} />}
    </div>
    </div>
)
}

export default TransactionDetails
