import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip)

const TotalRoundedChart = ({ receiverAccountInfo, amount }) => {

  const generateData = (receiverAccountInfo) => {
    
    const receivedAmountArr = receiverAccountInfo.map((account) => {
      return account.received_amount
    });
    
    const colourScheme = ["#E27D60", "#85DCB8", "#E8A87C", "#C38D9E", "#41B3A3"]; // Move this to top level of app
    const colourSlice = colourScheme.slice(0, receivedAmountArr.length)
    
    const labelArr = receiverAccountInfo.map((account) => {
      return account.account_name
    });
    
    return {
      labels: labelArr,
      datasets: [{
        label: 'Amount Received',
        data: receivedAmountArr, // array of received_amounts from receiver_account data
        backgroundColor: colourSlice // array of corresponding colours
      }]
    };
    
  }

  const generatePlugins = (amount) => {

    return [{
      beforeDraw: function(chart) {
       var width = chart.width,
           height = chart.height,
           ctx = chart.ctx;
           ctx.restore();
           var fontSize = (height / 140).toFixed(2);
           ctx.font = fontSize + "em sans-serif";
           ctx.textBaseline = "middle";
           var text = `£${amount}`,
           textX = Math.round((width - ctx.measureText(text).width) / 2),
           textY = height / 2;
           ctx.fillText(text, textX, textY);
           ctx.save();
      } 
    }]
  }

  return (
    <Doughnut
      data={generateData(receiverAccountInfo)}
      plugins={generatePlugins(amount)}
    />
  );

}

export default TotalRoundedChart