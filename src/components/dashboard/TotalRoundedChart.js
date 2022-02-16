import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip)

const TotalRoundedChart = ({ receiverAccountInfo }) => {

  const generateChart = (receiverAccountInfo) => {

    const receivedAmountArr = receiverAccountInfo.map((account) => {
      return account.received_amount
    });
    
    console.log(receivedAmountArr)
    
    const colourScheme = ["#E27D60", "#85DCB8", "#E8A87C", "#C38D9E", "#41B3A3"]; // Move this to top level of app
    const colourSlice = colourScheme.slice(0, receivedAmountArr.length)

    console.log(colourSlice)

    const labelArr = receiverAccountInfo.map((account) => {
      return account.account_name
    });

    const data = {
      labels: labelArr,
      datasets: [{
        label: 'Amount Received',
        data: receivedAmountArr, // array of received_amounts from receiver_account data
        backgroundColor: colourSlice // array of corresponding colours
      }]
    };

    return (
      <Doughnut
        data={data}
      />
    );
  }

  return (
    <div>
      {generateChart(receiverAccountInfo)}
    </div>
  )
}

export default TotalRoundedChart