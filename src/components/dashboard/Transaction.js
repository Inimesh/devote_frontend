import React from "react";

const Transaction = (props) => {
  return (
    <li key={props.key}>
      {props.name}, {props.created_at}, {props.amount}, {props.round_up}
    </li>
  )
}