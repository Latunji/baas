import React from 'react';
import '../Modal.css';
import { useState } from 'react';
import bank from "../../assets/dashboard/polaris.png";
import money from "../../assets/dashboard/wallet.png";
import email from "../../assets/email.png";
import right from "../../assets/right.png";
import verified from "../../assets/verified.png";
import logo from "../../assets/logo.png";
import { SummaryData } from '../TransfarData';

function BaasTransfar({ closeModal }) {
  const [change, setChange] = useState("id")

  return (
    <section className="modal">
      {change === "id" && (
        <div className="transfar"><br /><br /><br />
          <div className="header">
            <h1>Fund Transfer</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div><br />
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
                <input type="text" placeholder="Enter 10-digit Account Number" />

                <label>Amount</label>
                <input type="text" placeholder="Amount" />

                <input type="text" placeholder="Add a note" className="note" />
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
      {change === "id2" && (
        <div className="transfar"><br /><br /><br />
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
          <div><br />
            <span className='back'
              onClick={() => {
                setChange("id");
              }}
            >
              <img src={right} alt="right.png" /> back
            </span>
          </div>

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
                  <div><img src={money} alt="wallet.png" /></div>
                  <div><p>Available Balance</p>
                    <h1>₦ 1,340,040.00 </h1></div>
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
        <div className="transfar"><br /><br /><br />
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
              <div className="row">
                <div className='col'><p>Available Balance</p>
                  <h1>₦ 1,340,040.00 </h1></div>
                <div><input type="checkbox" id="save"></input></div>
              </div>
            </div>
            <div className="options">
              <img src={bank} alt="polaris.png" />
              {/* <div className="pay_content"> */}
              <div className="row">
                <div className='col'>
                  <p>POLARIS BANK PLC</p>
                  <h1>**** 7202</h1></div>
                <div><input type="checkbox" id="save"></input></div>
                {/* </div> */}
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
        <div className="transfar_pin_body"><br /><br /><br />
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
          <div className="transfar_pin">
            <p>Enter your transaction pin</p>
            <h1>#5000</h1>
            <div className="pin_input">
              <form action="" className="pin_in">
                <input type="text" className="pin" />
                <input type="text" className="pin" />
                <input type="text" className="pin" />
                <input type="text" className="pin" />
              </form>
              <p>Forgot Pin?</p>
              <input type="button" onClick={() => {
                setChange("id5");
              }} value="Confirm" />
            </div>
          </div>
        </div>
      )}
      {change === "id5" && (
        <div className="transfar_pin_body"><br /><br /><br />
          <div className="header">
            <h1>OTP Verification</h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <hr className="divider" />
          <div className="transfar_pin">
            <img src={email} alt="email.png" />
            <h1>Check your email</h1>
            <p>We sent an Otp code to  oopeoluwa@gmail.com</p>
            <div className="pin_input">
              <form action="" className="pin_in">
                <input type="text" className="pin" />
                <input type="text" className="pin" />
                <input type="text" className="pin" />
                <input type="text" className="pin" />
              </form>
              <input type="button" onClick={() => {
                setChange("id6");
              }} value="Proceed" />
              <p>Dindn't receive code? click to resend</p>
            </div>
          </div>
        </div>
      )}
      {change === "id6" && (
        <div className="transfar"><br /><br />
          <div className="header">
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <hr className="divider" />
          <div className="transfar_pin">
            <img src={verified} alt="verified.png" />
            <h1>Successful</h1>
            <br />
            <h1>N5000</h1>
            <div className="success_msg">
              <div className='success_msg_row'>
                <p>Recipient</p><p>David Ogunmodede<br /><span>Wema Bank(123 456 7890)</span></p>
              </div>
              <div className='success_msg_row'>
                <p>Fee</p><p>N0.00</p>
              </div>
              <div className='success_msg_row'>
                <p>Payment Method</p><p>Balance</p>
              </div>
            </div>
            <div className='success_msg_row'>
              
            <input type="button" value="Complete" /><input type="button" onClick={() => {
                setChange("id7");
              }} value="View Receipt" />
            </div>
          </div>
        </div>
      )}
      {change === "id7" && (
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
              <hr className="divider_receipt" />
              <div className='success_msg_row'>
                <p>Sender</p><p>Opeoluwa Ogunmodede<br /><span>Baas | 512 433 3533</span></p>
              </div>
              <hr className="divider_receipt" />
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

export default BaasTransfar;
