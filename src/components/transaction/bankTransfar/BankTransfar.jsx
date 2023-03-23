import {React, useState }from 'react';
import '../Modal.css';
import bank from "../../assets/dashboard/polaris.png";
import money from "../../assets/dashboard/wallet.png";
import { SummaryData } from "../TransfarData";

function BankTransfar({closeModal}) {
  const [modalForm, setModalForm] = useState("id")
  return (
    <section className="modal">
      {modalForm === "id" && (
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
                <h1>Interbank transfer</h1>
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
                    setModalForm("id2");
                  }}
                >
                  Next
                </button>
              </form>
            </form>
          </div>
        </div>
      )}
      {modalForm === "id2" && (
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
          <p>back</p>
          <div className="summary">
            {SummaryData.map((info) => {
              return (
                <div className="summary_info">
                  <p>{info.title} </p>
                  <p>{info.info}</p>
                </div>
              );
            })}
            <label>Payment Method</label>
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
                  setModalForm("id3");
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {modalForm === "id3" && (
        <div className="transfar">
          <div className="header">
            <h1>Select payment methods</h1>
            <button>X</button>
          </div>
          <hr className="divider" />
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
            <button
              className="pay-button"
              onClick={() => {
                setModalForm("id4");
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {modalForm === "id4" && (
        <div className="pin_sec">
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

export default BankTransfar
