// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend)

// const TotalRoundedChart = ({ transactions, receiverAccountInfo }) => {

//   const receivedAmountArr = receiverAccountInfo.map((account) => {
//     return account.received_amount
//   })

  

//   const data = {
//     lables: ['label 1', 'label 2', 'label 3'],
//     datasets: [{
//       data: [receivedAmountArr], // array of received_amounts from receiver_account data
//       backgroundColor: [] // array of corresponding colours
//     }]
//   }

//   return (
//     <div>
//       <Doughnut
//         data={data}
//         options={{
          
//         }}
//       />
//     </div>
//   )
// }

// export default TotalRoundedChart