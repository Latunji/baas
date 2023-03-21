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
        <img src={cc} alt="cc.png" className='cc'/>
        <img src={cc2} alt="cc2.png" className='cc2'/>
      </div>
      <div className="send-buttons">
        {TransfarData.map((send) =>{
          return(
            <div className="transfar-data">
              <img src={send.icon} alt="transfar.png"/>
              <p>{send.name}</p>
            </div>
          )
        })}
      </div>
      <div className="send-section"></div>
      <h1>Quick Transfar</h1>
      <div className="quick-transfers">
        {QuickTransfar.map((users) =>{
          return(
            <div className="uData">
              <img src={users.icon} alt=""/>
              {users.name}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Payment