import React from "react";
import {formatDate} from "../../helperFunctions";

const Transaction = (props) => {
  const roundAmount = props.round_up;
  const emptySpan = <span className="ps-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>;
  return (
    <p className="col-12 d-flex justify-content-between">
      <span className="fw-bold">{props.name}<br /> {formatDate(props.created_at)}</span>
      <span><span>{props.amount}</span> {roundAmount ? <span className="ps-5">+{roundAmount}</span> : emptySpan}</span>
    </p>
  )
}

export default Transaction;