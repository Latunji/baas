import React from 'react';
import '../Transactions.css'

function BankTransfar({closeModal}) {
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
          <div className="t_body" id='id2'>
            <div className="balance">
              <p>Account Balance</p>
              <h3>₦ 1,340,040.00 </h3>
            </div>
            <form action="/" className="transfar_form">
              <div className="transfar_intro">
                <h1>Interbank transfer</h1>
                <p>Send money to other banks.</p>
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
                <button>Next</button>
              </form>
            </form>
          </div>
      </div>
    </section>
  );
}

export default BankTransfar
