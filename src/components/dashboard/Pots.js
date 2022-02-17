import React from 'react';
import Pot from './Pot';
import TotalRounded from './TotalRounded';



const renderPots = (receiverAccountInfo, transactions) => {
  const potArr = receiverAccountInfo.map((account, index) => {
    // TODO This amount needs to be calculated based on spread determined by user. Default config is to split evenly

    const colourScheme = ["#E27D60", "#85DCB8", "#E8A87C", "#C38D9E", "#41B3A3"];
    return <Pot key={account.id} accountInfo={account} colour={colourScheme[index]} transactions={transactions} potNo={receiverAccountInfo.length}/>
  })
  return potArr
}

const Pots = (props) => {
  return (
    <div class="top-align-window">
      <h1 class="pots-font">pots</h1>
        <div id="pots-container" className="pots-container">
          <TotalRounded transactions={props.transactions} receiverAccountInfo={props.receiverAccountInfo}/>
          <div align="center">{renderPots(props.receiverAccountInfo, props.transactions)}</div>
        </div>
    </div>
  )
}


export default Pots