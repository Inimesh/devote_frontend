import React from "react";
import {formatDate} from "../../helperFunctions";

const Transaction = (props) => {
  return (
    <li>
      {props.name}, {formatDate(props.created_at)}, {props.amount}, {props.round_up}
    </li>
  )
}

export default Transaction;
