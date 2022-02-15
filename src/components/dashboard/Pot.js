import React from 'react'

const Pot = (props) => {
  return (
    <div>
      <p>*Receiver account picture here*</p>
      <div style={{color: `${props.colour}`}}>
        <h2>{props.accountInfo.account_name}</h2>
        <div>£{props.accountInfo.received_amount}</div>
      </div>

    </div>
  )
}

export default Pot