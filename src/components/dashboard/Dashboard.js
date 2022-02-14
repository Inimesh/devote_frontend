import React from 'react';
import ListTransactions from "./ListTransactions.js";
import UserInfo from "./UserInfo.js";

const Dashboard = (props) => {

  return (
    <div>
      <div>Dashboard</div>
      {/* Account info Component */}
      <UserInfo details={true/* account info from api call*/}/>
      <ListTransactions transactions={props.transactions} />
      {/* Pots components */}
    </div>
  )
}

export default Dashboard