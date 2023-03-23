import {React, useState} from 'react'
import './Transactions.css'
import Sidebar2 from '../sidebar/Sidebar2';
import { TransfarData } from './baasTransfar/TransfarData';
import BaasTransfar from './baasTransfar/BaasTransfar'
import Topbar from '../Dashboard/dash/Topbar';
import TransactionOptions from './TransactionOptions';
import BankTransfer from './bankTransfar/BankTransfar';
import International from './internationalTransfar/International'

const Transactions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [active, setActive] = useState("id");
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);


  return (
  //   <div className="baas_inner">
  //   <Sidebar />
  //   <div className="body">
  //     <div className="dashboard_body ">
  //       {/* <TransactionHistory/> */}
  //        <div className="dash grid-col-span">
  //         <Dashboard />
  //       </div>
  //       <Payment /> 
  //       {/* <Transactions/> */}
  //     </div>
  //   </div>
  // </div>


    <div className="transaction">
         <Sidebar2 />
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
                    if(type.id == "1"){
                    setOpenModal(true);
                  }else if (type.id == "2"){
                    setOpenModal2(true);
                  }else {
                    setOpenModal3(true);
                  }
                }
                }
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
        {openModal && <BaasTransfar closeModal={setOpenModal} value={active}/>}
      </div>
      <div className="modal_container">
        {openModal2 && <BankTransfer closeModal={setOpenModal2} value={false}/>}
      </div>
      <div className="modal_container">
        {openModal3 && <International closeModal={setOpenModal3} value={false}/>}
      </div>
    </div>
  );
}

export default Transactions