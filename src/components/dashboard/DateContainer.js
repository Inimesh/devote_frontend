import React from 'react';
import Transaction from "./Transaction";
const scroll = {
  overflow: 'auto',
  height: '85vh',
}


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
    <div className='container-fluid' style={scroll}>
      <h3 class="date-font">{props.date}</h3>
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