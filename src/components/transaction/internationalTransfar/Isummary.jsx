import React from 'react'

function Isummary({closeModal}) {
  return (
    <section className="intra_transfar">
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
            <button className="pay-button">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Isummary
