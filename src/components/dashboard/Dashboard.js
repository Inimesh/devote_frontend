import React from 'react';

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
