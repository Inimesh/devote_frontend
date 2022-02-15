import React from "react";

const Transaction = (props) => {
  const roundAmount = props.round_up;
  const emptySpan = <span className="ps-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>;
  return (
    <p className="col-12 d-flex justify-content-between">
      <span><span className="fw-bold">{props.name}</span><br /> </span>
      <span><span className="fw-bold">£{props.amount}</span> {roundAmount ? <span className="ps-5 fw-bold round-up-amount">+£{roundAmount}</span> : emptySpan}</span>
    </p>
  )
}

export default Transaction;
