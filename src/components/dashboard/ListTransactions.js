import React from 'react';
import DateContainer from './DateContainer';
import {formatDate} from "../../helperFunctions";


const ListTransactions = (props) => {

  const getDateContainers = (transactions) => {
    // Set up hash where key = 'created_at date' and value = 'transaction'
    const transactionsByDate = {};
    transactions.forEach(transaction => {
      const date = formatDate(transaction.created_at)
      if ( date in transactionsByDate) {
        transactionsByDate[date].push(transaction)
      } else {
        transactionsByDate[date] = [transaction]
      }
    });

    const dateContainerArr = []
    for (const [date, transactions] of Object.entries(transactionsByDate)) {
      dateContainerArr.push(
        <DateContainer key={date} date={date} transactions={transactions} />
      )
    }
    return dateContainerArr;
  }

  return (
    <div>
      <h1 className="fw-bold mb-5">Transactions</h1>
      {getDateContainers(props.transactions)}
    </div>
  )
}

export default ListTransactions;
