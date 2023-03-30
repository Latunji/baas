import { React, useState } from "react";
import "./Transactions.css";
import Sidebar from "../sidebar/Sidebar";
import { TransfarData } from "./TransfarData";
import Topbar from "../Dashboard/dash/Topbar";

import TransactionOptions from "./TransactionOptions";
import BaasTransfar from "./baasTransfar/BaasTransfar";
import BankTransfar from "./bankTransfar/BankTransfar";
import International from "./internationalTransfar/International";


const Transactions = () => {
  const TransfarType = ["baas", "bank", 'international']
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  return (
    <div className="transaction">
      <div>
      <Sidebar />
        </div>
      <div className="transfar_body">
      
        <Topbar />
       
        <div className="">
          <TransactionOptions />
          
          <br />
          <div className="divider" />
          
          <span className="make_transfar">
            {TransfarData.map((type) => {
              return (
                <div
                  className="select_transfar_type"
                  onClick={() => {
                    if (type.id === "1") {
                      setOpenModal1(true);
                    } else if (type.id === "2") {
                      setOpenModal2(true);
                    } else {
                      setOpenModal3(true);
                    }
                  }}
                >
                  <img src={type.icon} alt="bank.png" />
                  <h1>{type.title}</h1>
                  <p>{type.body}</p>
                </div>
              );
            })}
          </span>
          <div className="modal_container">
        {openModal1 && <BaasTransfar closeModal={setOpenModal1} value={false} />}
        {openModal2 && 
          <BankTransfar closeModal={setOpenModal2} value={false} />
        }
        {openModal3 && 
          <International closeModal={setOpenModal3} value={false} />
        }
      </div>
        </div>
     
      </div>
      
    </div>
  );
};

export default Transactions;
