import React from "react";

const Transaction = (props) => {
  return (
    <li>
      {props.name}, {props.created_at}, {props.amount}, {props.round_up}
    </li>
  )
}

export default Transaction;