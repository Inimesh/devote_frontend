import React from 'react';
import ListTransactions from "./ListTransactions";

const Dashboard = (props) => {

  return (
    <div>
      <div>Dashboard</div>
      {/* Account info Component */}
      <ListTransactions transactions={props.transactions} />
      {/* Pots components */}
    </div>
  )
}

export default Dashboard;