import { React, useState } from "react";
import Bills from './Bills';
import "../Transactions.css";
import TransactionOptions from '../TransactionOptions';
import Topbar from '../../Dashboard/dash/Topbar';
import Sidebar from "../../sidebar/Sidebar";
import Airtime from './Airtime';
import { Mobile, Utilities, Education, Travels, Finance } from '.';
import './Bills.css'

const BillPayment = () => {
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
  return (
    <div className="transaction">
      <Sidebar />
      <div className="transfar_body">
        <Topbar />
        <div className="transfar_options">
          <TransactionOptions />
          <br />
          <div className="divider" />
          <span className="make_transfar">
          <div className="modal_container">
        {openModal1 && <Airtime closeModal={setOpenModal1} value={false} />}
      </div>
          <div className="bill_sections">
        <div className="mobile">
            {Mobile.map((value) =>{
                return(
                    <div className="bill_container"  onClick={() => {
                        if (value.id === "1") {
                          setOpenModal1(true);
                        }}}>
                        <Bills
                        icon ={value.icon}
                        title= {value.title}
                        />
                    </div>
                )
            })}
        </div>
        <div className="sections">
            <h1>Utilities</h1>
            <div className="section_content">
                {Utilities.map((value) => {
                    return (
                        <div className="bill_container">
                            <Bills
                            icon = {value.icon}
                            title ={value.title}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="sections">
            <h1>Education</h1>
            <div className="section_content">
                {Education.map((value) =>{
                    return (
                    <div className="bill_container">
                        <Bills icon={value.icon} title={value.title} />
                    </div>
                    );
                })}
            </div>
        </div>
        <div className="sections">
            <h1>Travels</h1>
            <div className="section_content">
                {Travels.map((value) =>{
                    return (
                    <div className="bill_container">
                        <Bills icon={value.icon} title={value.title} />
                    </div>
                    );
                })}
            </div>
        </div>
        <div className="sections">
            <h1>Finance</h1>
            <div className="section_content">
                {Finance.map((value) =>{
                    return (
                    <div className="bill_container">
                        <Bills icon={value.icon} title={value.title} />
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
          </span>
        </div>
      </div>
     
      </div>


   
  )
}

export default BillPayment
