import React from 'react';
import '../Transactions.css'
import bank from "../../assets/dashboard/polaris.png";
import {wallet} from "../../assets/dashboard/wallet.png";

function PaymentMethod({closeModal}) {
  return (
    <section className="intra_transfar">
      <div className="transfar">
        <div className="heading">
          <h1>Select payment methods</h1>
          <button>X</button>
        </div>
        <div className="divider" />
        <div className="select_payment_method">
          <div className="payment_option">
            <img src={wallet} alt="wallet.png" />
            <div className="pay_content">
                <p>Available Balance</p>
                <h1>₦ 1,340,040.00 </h1>
            </div>
          </div>
          <div className="payment_option">
            <img src={bank} alt="polaris.png" />
            <div className="pay_content">
                <p>POLARIS BANK PLC</p>
                <h1>**** 7202</h1>
            </div>
          </div>
        </div>
          <div className="pay_card_body">
            <button className="pay-button">Next</button>
          </div>
      </div>
    </section>
  );
}

export default PaymentMethod
