import React from 'react';
import Transaction from "./Transaction";

const DateContainer = (props) => {
  const transactions = props.transactions.map((transaction) => {
    return (
      <Transaction
      key={transaction.id} 
      name={transaction.name} 
      created_at={transaction.created_at}
      amount={transaction.amount}
      round_up={transaction.round_up}
      />
    )
  })



  return (
    <div className='container-fluid'>
      <h3>{props.date}</h3>
      <br />
        <div className='row'>
          {transactions}
          <hr />
        </div>
      <br />
    </div>
  )



}

export default DateContainer