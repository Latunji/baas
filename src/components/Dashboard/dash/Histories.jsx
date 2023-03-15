import{ React ,useState} from 'react';
import { HistoryData } from '.';
import "./Dashboard.css";
import  History from './History'

const Histories = () => {
  // const [selected, setSelected] = useState(0)
  return (
    <section className="histories">
      <div>
        <h1>History</h1>
        <p>Transaction from last 3 days</p>
      </div>
      <div>
        {HistoryData.map((history,id) =>{
            return (
              < History
                icon ={history.icon}
                subject ={history.subject}
                time = {history.time}
                date = {history.date}
                amount = {history.amount}
                status = {history.status}
              />
            );
        })}
      </div>
    </section>
  );
}

export default Histories