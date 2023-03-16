import React from 'react'
import './Payment.css'
import cc from '../../assets/dashboard/cc.png';
import cc2 from '../../assets/dashboard/cc2.png';
import { QuickTransfar, TransfarData } from '.';


const Payment = () => {
  return (
    <div className="payment-section">
      <h1>Payment Section</h1>
      <div className="credit-card">
        <img src={cc} alt="cc.png" className="cc" />
        <img src={cc2} alt="cc2.png" className="cc2" />
      </div>
      <div className="send-buttons">
        {TransfarData.map((send) => {
          return (
            <div className="transfar-data">
              <img src={send.icon} alt="transfar.png" />
              <p>{send.name}</p>
            </div>
          );
        })}
      </div>

      <div className="quick-transfers">
        <h1>Quick Transfars</h1>
        <select className="reciever">
          <option selected disabled>
            {QuickTransfar.map((users) => {
              return (
                <div className="uData">
                  <img src={users.icon} alt="" />
                  {users.name}
                </div>
              );
            })}
          </option>
        </select>
        <input type='text' placeholder='
        Enter Amount' className="sendamount"/>
        <input type='text' placeholder=' ' className="sendnote"/>
        <button>Send Money</button>
      </div>
    </div>
  );
}

export default Payment