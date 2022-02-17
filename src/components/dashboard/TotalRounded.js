import TotalRoundedChart from './TotalRoundedChart'

const TotalRounded = (props) => {


  const sumTotalRounded = (transactionsArr) => {
    const sum = transactionsArr.reduce((prev_value, current_transaction) => {
      if (current_transaction.round_up) {
        return prev_value + parseFloat(current_transaction.round_up)
      } else {
        return prev_value + 0.00
      }
    }, 0.00)
    return sum.toFixed(2)
  }


  return (
    <div>
      <TotalRoundedChart receiverAccountInfo={props.receiverAccountInfo} amount={sumTotalRounded(props.transactions)}/>
    </div>
  )

}

export default TotalRounded