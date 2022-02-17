import React from 'react'
import PotLogo from './PotLogo'

const Pot = (props) => {

  const sumTotalRounded = (transactionsArr) => {
    const sum = transactionsArr.reduce((prev_value, current_transaction) => {
      if (current_transaction.round_up) {
        return prev_value + parseFloat(current_transaction.round_up)
      } else {
        return prev_value + 0.00
      }
    }, 0.00)
    return sum
  }



  return (
    <div>
      <PotLogo accountName={props.accountInfo.account_name} />
      <div style={{color: `${props.colour}`}}>
        <h2>{props.accountInfo.account_name}</h2>
        <div>£{(sumTotalRounded(props.transactions)/props.potNo).toFixed(2)}</div>
      </div>

    </div>
  )
}

export default Pot;