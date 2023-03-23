import React from 'react';
import './Bills.css';

function Bills({icon, title}) {
  return (
    <div className='bill_card'>
      <img src={icon}/>
      <p>{title}</p>
    </div>
  )
}

export default Bills
