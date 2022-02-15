import React from 'react'

const Pot = (props) => {
  return (
    <div>
      <p>Receiver account picture here</p>
      <div>{props.accountInfo.account_name}</div>
      <div>{/* Total amount sent to receiver account */}</div>

    </div>
  )
}

export default Pot