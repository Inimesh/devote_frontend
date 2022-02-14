import React from 'react';
import ListTransactions from "./ListTransactions.js";
import AccountInfo from "./AccountInfo.js";

const Dashboard = (props) => {

  return (
    <div>
      <div>Dashboard</div>
      {/* Account info Component */}
      <AccountInfo details={/* account info from api call*/}/>
      <ListTransactions transactions={props.transactions} />
      {/* Pots components */}
    </div>
  )
}

export default Dashboard