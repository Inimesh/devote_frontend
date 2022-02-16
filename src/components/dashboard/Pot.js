import React from 'react'
import PotLogo from './PotLogo'

const Pot = (props) => {
  return (
    <div>
      <PotLogo accountName={props.accountInfo.account_name} />
      <div style={{color: `${props.colour}`}}>
        <h2>{props.accountInfo.account_name}</h2>
        <div>£{props.accountInfo.received_amount}</div>
      </div>

    </div>
  )
}

export default Pot;