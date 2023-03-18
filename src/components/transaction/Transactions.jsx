import {React, useState} from 'react'
import './Transactions.css'
import Sidebar from '../sidebar/Sidebar';
import transfar from '../assets/bank.png';
import { TransfarData, TransfarType } from './baasTransfar/TransfarData';

const Transactions = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="transaction">
      <Sidebar />
      <div className="fund_transfar">
        <h1>Transfar</h1>
        <div className="transfar_options">
          <div className="transfar_type">
            {TransfarType.map ((type, id) => {
              return(
                <div className={selected === id ? " select_type active" : "select_type"} onClick={() =>{
                  setSelected(id)
                }} >
                  <p>{type.heading}</p>
                </div>
              )
            })}
          </div>
       <div className='divider'/>

          <span className="make_transfar">
            {TransfarData.map((type, id) =>{
                return (
                  <div className="select_transfar_type">
                    <img src={type.icon} alt="bank.png" />
                    <h1>{type.title}</h1>
                    <p>{type.body}</p>
                  </div>
                );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Transactions