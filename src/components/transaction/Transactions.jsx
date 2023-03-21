import {React, useState} from 'react'
import './Transactions.css'
import Sidebar from '../sidebar/Sidebar';
import { TransfarData } from './baasTransfar/TransfarData';
import BaasTransfar from './baasTransfar/BaasTransfar'
import Topbar from '../Dashboard/dash/Topbar';
import TransactionOptions from './TransactionOptions';

const Transactions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [active, setActive] = useState("id")

  return (
    <div className="transaction">
      <div className="fund_transfar">
       <Topbar />
        <div className="transfar_options">
          <TransactionOptions />
          <div className="divider" />
          <span className="make_transfar">
            {TransfarData.map((type, id) => {
              return (
                <div
                  className="select_transfar_type"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <img src={type.icon} alt="bank.png" />
                  <h1>{type.title}</h1>
                  <p>{type.body}</p>
                </div>
              );
            })}
          </span>
        </div>
      </div>
      <div className="modal_container">
        {openModal && <BaasTransfar closeModal={setOpenModal} />}
      </div>
    </div>
  );
}

export default Transactions