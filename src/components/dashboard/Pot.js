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
  <div class="row row-cols-2 row-cols-md-2 g-2">
  <div class="col" >
    <div class="card">
      <PotLogo accountName={props.accountInfo.account_name} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div style={{color: `${props.colour}`}}>
        <h5 class="card-title">{props.accountInfo.account_name}</h5>
        <p class="card-text">£{(sumTotalRounded(props.transactions)/props.potNo).toFixed(2)}</p>
      </div>
    </div>
   </div>
  </div>
  </div>
  )
}




export default Pot;

// const Pot = (props) => {
//   return (
//     <div>
//       <PotLogo accountName={props.accountInfo.account_name} />
//       <div style={{color: `${props.colour}`}}>
//         <h2>{props.accountInfo.account_name}</h2>
//         <div>£{props.accountInfo.received_amount}</div>
//       </div>
//     </div>
//   )
// }