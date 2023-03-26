import React from 'react';
import '../Modal.css';
import { useState } from 'react';
import bank from "../../assets/dashboard/polaris.png";
import money from "../../assets/dashboard/wallet.png";
import { SummaryData } from '../TransfarData';

function BaasTransfar({closeModal}) {
  const [change, setChange] = useState("id")

  return (
    <section className="modal">
      {change === "id" && (
        <div className="transfar">
          <div className="header">
            <h1>Fund Transfar</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <hr className="divider" />
          <div className="transfar_body">
            <div className="balance">
              <p>Account Balance</p>
              <h1>₦ 1,340,040.00 </h1>
            </div>
            <form action="/" className="transfar_form">
              <div className="form_head">
                <h1>Intrabank transfer</h1>
                <p>Send money to BaaS friends and family.</p>
              </div>
              <div className="form">
                <label>Account Number</label>
                <input type="text" placeholder="Enter Account Number" />

                <label>Amount</label>
                <input type="text" placeholder="Amount" />

                <input type="text" placeholder="note" className="note" />
              </div>

              <p>or</p>
              <form className="form">
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

      {/* reciever info */}
      {change === "id2" && (
        <div className="transfar">
          <div className="header">
            <h1>Payment Summary</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <hr className="divider" />
          <p
            onClick={() => {
              setChange("id");
            }}
          >
            back
          </p>
          <div className="summary">
            {SummaryData.map((info) => {
              return (
                <div className="summary_info">
                  <p>{info.title} </p>
                  <p>{info.info}</p>
                </div>
              );
            })}
            <div className="payment_card">
              <label>Payment Method</label>
              <div className="card_body">
                <div className="pay_card">
                  <p>Available Balance</p>
                  <h1>₦ 1,340,040.00 </h1>
                </div>
              </div>
              <button
                onClick={() => {
                  setChange("id3");
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* payment method */}
      {change === "id3" && (
        <div className="transfar">
          <div className="header">
            <h1>Select payment methods</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <hr className="divider" />
          <div className="select_payment">
            <div className="options">
              <img src={money} alt="wallet.png" />
              <div className="col">
                <p>Available Balance</p>
                <h1>₦ 1,340,040.00 </h1>
              </div>
            </div>
            <div className="options">
              <img src={bank} alt="polaris.png" />
              <div className="pay_content">
                <p>POLARIS BANK PLC</p>
                <h1>**** 7202</h1>
              </div>
            </div>
          </div>
          <div className="pay_card_body">
            <button
              className="pay-button"
              onClick={() => {
                setChange("id4");
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {change === "id4" && (
        <div className="transfar">
          <div className="header">
            <h1>Transaction Pin</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <hr className="divider" />
          <div className="transfar_body">
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
