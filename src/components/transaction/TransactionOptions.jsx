import {React, useState} from 'react';
import { TransfarType } from "./baasTransfar/TransfarData";
import "./Transactions.css";

function TransactionOptions() {
    const [selected, setSelected] = useState(0);
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
              <p>{type.heading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TransactionOptions
