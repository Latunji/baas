import React from 'react'
import '../Transactions.css'
function Pin({closeModal}) {

  return (
    <div className="pin_sec">
        <div className='heading'>
            <h1>Transaction Pin</h1>
            <button onClick={() => { closeModal(false); }}> X</button>
        </div>
      <div className="divider" />
      <div className="pin_form">
        <p>Enter your transaction pin</p>
        <h1>#5000</h1>
        <div className="pin_input">
            <form action="" className='pin_in'>
                <input type="text" className='pin' />
                <input type="text" className='pin' />
                <input type="text" className='pin' />
                <input type="text" className='pin' />
            </form>
                <input type="button" value="Confirm" />
        </div>
      </div>

    </div>
  );
}

export default Pin
