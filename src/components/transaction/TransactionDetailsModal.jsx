import React from 'react';
import './Modal.css';
import { useState } from 'react';
import right from "../assets/right.png";
import logo from "../assets/logo.png";

function TransactionDetailsModal({ closeModal }) {
  const [change, setChange] = useState("id")

  return (
    <section className="modal">
     
      
      {change === "id" && (
        <div className="receipt"><br /><br />
          <div className="header">
            <button
              onClick={() => {
                closeModal(false);
              }}
            ><img src={right} className='image' />  Back
            </button>
          </div>
          <div className='logo'>
          <img src={logo} alt="logo.png" />
          </div>
          <div className="transfar_pin">
            <h1>N5000</h1>
            <p>Successful Transaction</p>
            <p>05:01, Mar 23, 2023</p>
            <br />
            <hr className="divider_receipt" />
            <div className="success_msg">
              <div className='success_msg_row'>
                <p>Recipient</p><p>David Ogunmodede<br /><span>Wema Bank(123 456 7890)</span></p>
              </div>
              </div>
              <hr className="divider_receipt" />
              <div className="success_msg">
              <div className='success_msg_row'>
                <p>Sender</p><p>Opeoluwa Ogunmodede<br /><span>Baas | 512 433 3533</span></p>
              </div>
              </div>
              <hr className="divider_receipt" />
              <div className="success_msg">
              <p>Transaction Info</p>
              <div className='success_msg_row'>
                <p>Transfer Type</p><p>One-Off</p>
              </div>
              <div className='success_msg_row'>
                <p>What's it for?</p><p>Pocket Money</p>
              </div>
              <div className='success_msg_row'>
                <p>Transaction ID</p><p>8177g373738</p>
              </div>
              <div className='success_msg_row'>
                <p>Session ID</p><p>13244553333222233232</p>
              </div>
            </div>
              
            <input type="button" value="Download" />
            </div>
          </div>
      )}
    </section>
  );
}

export default TransactionDetailsModal;
