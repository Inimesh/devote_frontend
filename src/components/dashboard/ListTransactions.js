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
    <div>
      <h1 className="fw-bold mb-5 titleTransactions">Transactions</h1>
      <div className="container-fluid scrollableTransactionList">
        <div className="row">{transactions}</div>
      </div>
    </div>
  );
}

export default ListTransactions;
