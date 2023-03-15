import React from 'react';
import "./Dashboard.css";
import { PeopleData } from ".";

const People = () => {
  return (
    <section className="people">
      {PeopleData.map((people) => {
        return (
          <div className="data">
            <img src={people.icon} alt="icon" />
            <div className="amount-data">
              <div className="amount">{people.amount}</div>
              <div className="text">{people.title}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default People