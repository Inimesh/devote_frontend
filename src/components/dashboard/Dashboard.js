import React, { useEffect } from 'react';
import ListTransactions from "./ListTransactions.js";
import Pots from './Pots.js';
import UserWindow from "./UserWindow.js";

const Dashboard = (props) => {

  return (
    <div className="container-fluid p-sm-3">
      <div className="row">
        <div className="col-sm-2"><UserWindow className="user_window" userInfo={props.userInfo} transactions={props.transactions}/></div>
        <div className="col-sm-6"><ListTransactions transactions={props.transactions} /></div>
        <div className="col-sm-4"><Pots receiverAccountInfo={props.receiverAccountInfo}/>Pots</div>
      </div>
    </div>
  )
}

export default Dashboard;
