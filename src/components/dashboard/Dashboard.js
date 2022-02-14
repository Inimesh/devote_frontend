import React, { useEffect } from 'react';
import ListTransactions from "./ListTransactions.js";
import UserWindow from "./UserWindow.js";

const Dashboard = (props) => {

  return (
    <div>
      <div>Dashboard</div>
      {/* Account info Component */}
      <UserWindow className="user_window" userInfo={props.userInfo} transactions={props.transactions}/>
      {/* Transactions Component */}
      <ListTransactions transactions={props.transactions} />
      {/* Pots components */}
    </div>
  )
}

export default Dashboard