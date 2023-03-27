import { React, useState } from "react";
import { TransfarType } from "./TransfarData";
import "./Transactions.css";
import { Link } from 'react-router-dom';

function TransactionOptions() {
  const [selected, setSelected] = useState(0);
  const [pageChange, setPageChange] = useState("page1");
  return (
    <div>
      <div className="transfar_type">
        {TransfarType.map((type, id) => {
          return (
            <div
              className={
                selected === id ? " select_type active" : "select_type"
              }
              onClick={() => {
                setSelected(id);
              }}
            >
           <Link className="link" to={type.url}>  <p>{type.heading}</p></Link> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TransactionOptions;
