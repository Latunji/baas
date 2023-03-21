import {React, useState} from 'react';
import TransactionOptions from './TransactionOptions';


function History() {
    
  return (
    <div className='history'>
        <TransactionOptions/>
        <div className="search_section">
            <input type="search" value="Search Transaction ID"/>
        </div>
        <div className="history_list">

        </div>
      
    </div>
  )
}

export default History
