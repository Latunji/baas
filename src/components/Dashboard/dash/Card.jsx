import React from 'react'
import './Card.css'
const Card = (props) => {

  return (
    <div key={props.id} className="card">
      <img src={props.icon} alt="" className="icon" />
      <div className="amount">{props.amount}</div>
      <div className="title">{props.title}</div>
    </div>
  );
}

export default Card