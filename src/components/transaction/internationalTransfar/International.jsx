import {React, useState} from "react";
import '../Modal.css'
import bank from "../../assets/dashboard/polaris.png";
import money from "../../assets/dashboard/wallet.png";

function International({closeModal}) {
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
                <h1>International transfer</h1>
                <p>Send money to other banks.</p>
              </div>
              <div className="form">
                <label>Account Number</label>
                <input type="text" placeholder="Enter Account Number" />

                <select value="Select Beneficiary">
                  <label>Bank</label>
                  <option value="bank">Bank</option>
                </select>
                <label>Reciepiant Name</label>
                <input type="text" placeholder="Recipient Name" />

                <label>Bank Swift Code</label>
                <input type="text" placeholder="Swift Code" />

                <label>Amount</label>
                <input type="text" placeholder="Amountr" />

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
              <button
                className="pay-button"
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
          <hr className="divider" />
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

export default International;
