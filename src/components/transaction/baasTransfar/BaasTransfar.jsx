import React from 'react';
import '../Transactions.css';

function BaasTransfar({closeModal}) {

  return (
      <section className="intra_transfar">
          <div className="transfar_section"></div>
        <div className="transfar">

          <div className="heading">
            <h1>Fund Transfar</h1>
            <button onClick={() =>{closeModal(false)}}>X</button>
          </div>
          <div className="divider" />
          
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
            <input type="text" placeholder="note" className='note' />
            

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
      </section>
  );
}

export default BaasTransfar;
