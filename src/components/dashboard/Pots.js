import React from 'react'
import Pot from './Pot'


// Need an array of nice hex colours
// During the dynamic render of Pot components we need to assign a colour to each one
// we can use their relative id values to assign to colour array index
// ids: 15, 17, 34, 27, 101
// array index: 0, 1, 3, 2, 4

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
      <h1 className="fw-bold mb-5">Pots</h1>
      <p align="center">{renderPots(props.receiverAccountInfo)}</p>
    </div>
  )
}


export default Pots