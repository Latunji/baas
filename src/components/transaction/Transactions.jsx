import { React, useState } from "react";
import "./Transactions.css";
import Sidebar from "../sidebar/Sidebar";
import { TransfarType } from "./TransfarData";

import Topbar from "../Dashboard/dash/Topbar";
import Transfars from "./Transfars";
import BillPayment from './BillPayment/BillPayment'

const Transactions = () => {
  const [selected, setSelected] = useState(0);

  const [loadPage, setLoadPage] = useState(true);
  const [loadPage2, setLoadPage2] = useState(false);
  const [loadPage3, setLoadPage3] = useState(false);

  return (
    <main className="transaction">
      <Sidebar />
      <div className="transfar_body">
        <Topbar />
        <div className="transfar_options">
          <span className="transfar_type">
            {TransfarType.map((type, id) => {
              return (
                <div
                  className={
                    selected === id ? " select_type active" : "select_type"
                  }
                  onClick={() => {
                    setSelected(id);
                    // if (type.id === "1") {
                    //   setLoadPage(true);
                    //   console.log("working");
                    // } 
                    if (type.id === "2") {
                      setLoadPage2(true);
                      console.log("working2");
                    } else {
                      setLoadPage3(true);
                      console.log("working3");
                    } }} >
                  <p>{type.heading}</p>
                  {loadPage && <TransfarType />}
                  {/* {loadPage2  && <BillPayment />}
                  {loadPage3 && <Transfars  />} */}
                </div>
              );
            })}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Transactions;
