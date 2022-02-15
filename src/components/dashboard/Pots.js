import React from 'react'
import Pot from './Pot'


const renderPots = (receiverAccountData) => {
  const potArr = receiverAccountData.map((account) => {
    // TODO This amount needs to be calculated based on spread determined by user. Default config is to split evenly
    return <Pot key={account.id} accountInfo={account} />
  })
  return potArr
}

const Pots = (props) => {
  return (
    <div>
      {renderPots(props.receiverAccountInfo)}
    </div>
  )
}

export default Pots