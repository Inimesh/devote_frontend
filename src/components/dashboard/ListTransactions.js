import React from 'react';
import Transaction from "./Transaction";

const ListTransactions = (props) => {
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
    <ul>
      {transactions}
    </ul>
  )
}

export default ListTransactions;
