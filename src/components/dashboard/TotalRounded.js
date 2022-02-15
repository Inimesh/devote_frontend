import React from 'react'

const sumTotalRounded = (transactionsArr) => {
  const sum = transactionsArr.reduce((prev_value, current_transaction) => {
    if (current_transaction.round_up) {
      return prev_value + parseFloat(current_transaction.round_up)
    } else {
      return prev_value + 0.00
    }
  }, 0.00)

  return sum.toFixed(2)
}

const TotalRounded = (props) => {
  
  return (
    <div>
      Total rounded £{sumTotalRounded(props.transactions)}
    </div>
  )

}

export default TotalRounded