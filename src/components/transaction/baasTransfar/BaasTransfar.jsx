import React from 'react';
import '../Transactions.css';
import { useState } from 'react';
import bank from "../../assets/dashboard/polaris.png";
import money from "../../assets/dashboard/wallet.png";

function BaasTransfar({closeModal}) {
  const [change, setChange] = useState("id")

  return (
    <section className="intra_transfar">
      {change === "id" && (
        <div className="transfar">
          <div className="heading">
            <h1>Fund Transfar</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="divider" />
          <div className="t_body">
            <div className="balance">
              <p>Account Balance</p>
              <h3>₦ 1,340,040.00 </h3>
            </div>
            <form action="/" className="transfar_form">
              <div className="transfar_intro">
                <h1>Intrabank transfer</h1>
                <p>Send money to BaaS friends and family.</p>
              </div>
              <div className="transfar_form">
                <label>Account Number</label>
                <input type="text" placeholder="Enter Account Number" />
              </div>
              <div className="transfar_form">
                <label>Amount</label>
                <input type="text" placeholder="Amount" />
              </div>
              <input type="text" placeholder="note" className="note" />

              <p>or</p>
              <form className="beneficiary">
                <label>Beneficiaries</label>
                <select placeholder="Select Beneficiary" />
                <label>Transfar Type</label>
                <select placeholder="One Time" />
                <button
                  onClick={() => {
                    setChange("id2");
                  }}
                >
                  Next
                </button>
              </form>
            </form>
          </div>
        </div>
      )}
      {change === "id2" && (
        <div className="transfar">
          <div className="heading">
            <h1>Payment Summary</h1>
            <p>Cancel</p>
          </div>
          <div className="divider" />
          <p>back</p>
          <div className="summary">
            <div className="summary_body">
              <p>Name</p>
              <p>DAVID OGUNMODEDE</p>
            </div>
            <div className="summary_body">
              <p>Amount</p>
              <p>#5,000.00</p>
            </div>
            <div className="summary_body">
              <p>Fee</p>
              <p>#0.00</p>
            </div>
            <div className="summary_body">
              <p>Transfar Type</p>
              <p>One Time</p>
            </div>
            <label>Payment Method</label>
            <div className="pay_card_body">
              <div className="payment_method">
                <img src="../../assets/dashboard/wallet.png" alt="wallet.png" />
                <div className="pay_card">
                  <p>Available Balance</p>
                  <h1>₦ 1,340,040.00 </h1>
                </div>
              </div>
              <button className="pay-button" onClick={() =>{
                setChange("id3")
              }}>Next</button>
            </div>
          </div>
        </div>
      )}
      {change === "id3" && (
        <div className="transfar">
          <div className="heading">
            <h1>Select payment methods</h1>
            <button>X</button>
          </div>
          <div className="divider" />
          <div className="select_payment_method">
            <div className="payment_option">
              <img src={money} alt="wallet.png" />
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
            <button className="pay-button" onClick={() =>{
              setChange("id4")
            }}>Next</button>
          </div>
        </div>
      )}
      {change === "id4" && (
        <div className="pin_sec">
          <div className="heading">
            <h1>Transaction Pin</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="divider" />
          <div className="pin_form">
            <p>Enter your transaction pin</p>
            <h1>#5000</h1>
            <div className="pin_input">
              <form action="" className="pin_in">
                <input type="text" className="pin" />
                <input type="text" className="pin" />
                <input type="text" className="pin" />
                <input type="text" className="pin" />
              </form>
              <input type="button" value="Confirm" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BaasTransfar;
