import React from "react";
import "../Transactions.css";

function International({closeModal}) {
  return (
    <section className="intra_transfar">
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
                <h1>International transfer</h1>
                <p>Send money to other banks.</p>
            </div>
            <div className="transfar_form">
                <label>Account Number</label>
                <input type="text" placeholder="Enter Account Number" />
            </div>
            <div className="transfar_form">
                <select value="Select Beneficiary">
                <label>Bank</label>
                <option value="bank">Bank</option>
                </select>
                <div className="transfar_form">
                <label>Reciepiant Name</label>
                <input type="text" placeholder="Recipient Name" />
                </div>
                <div className="transfar_form">
                <label>Bank Swift Code</label>
                <input type="text" placeholder="Swift Code" />
                </div>
                <div className="transfar_form">
                <label>Amount</label>
                <input type="text" placeholder="Amountr" />
                </div>
            </div>
            <input type="text" placeholder="note" className="note" />

            <p>or</p>
            <form className="beneficiary">
                <select value="Select Beneficiary">
                <label>Beneficiaries</label>
                <option value="Select Beneficiary">Select Beneficiary</option>
                </select>
                <select value="Transfar Type">
                <label>Transfar Type</label>
                <option value="One Time">One Time</option>
                </select>
                <button>Next</button>
            </form>
            </form>
        </div>
      </div>
    </section>
  );
}

export default International;
