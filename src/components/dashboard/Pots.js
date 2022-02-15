import React from 'react'
import Pot from './Pot'


const renderPots = (receiverAccountData) => {
  return receiverAccountData.map((account) => {
    return <Pot key={account.id} accountInfo={account}/>
  })
}

const Pots = (props) => {
  return (
    <div>
      {renderPots(props.receiverAccountInfo)}
    </div>
  )
}

export default Pots