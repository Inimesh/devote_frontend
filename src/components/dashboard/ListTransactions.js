import React from 'react';
import DateContainer from './DateContainer';
import {formatDate} from "../../helperFunctions";
const scroll = {
  overflow: 'auto',
  height: '85vh',
}


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
    <div class="top-align-window">
      <h1 class="transactions-font">transactions</h1>
        <div style={scroll}>
          {getDateContainers(props.transactions)}
        </div>
    </div>
  )
}

export default ListTransactions;
