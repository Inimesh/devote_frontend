import React from 'react'
import Pot from './Pot'



const renderPots = (receiverAccountData) => {
  const potArr = receiverAccountData.map((account, index) => {
    // TODO This amount needs to be calculated based on spread determined by user. Default config is to split evenly

    const colourScheme = ["#E27D60", "#85DCB8", "#E8A87C", "#C38D9E", "#41B3A3"];
    return <Pot key={account.id} accountInfo={account} colour={colourScheme[index]}/>
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