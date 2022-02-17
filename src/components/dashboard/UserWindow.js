import React from 'react'
import TotalRounded from './TotalRounded'
import UserInfoDisplay from './UserInfoDisplay'
import UserInfoMenu from './Navbar'

const UserWindow = (props) => {
  return (
    <div>
      {/* UserInfoDisplay */}
      {/* TotalRounded */}
      {/* UserInfoMenu */}
      <UserInfoDisplay username={props.userInfo.username} email={props.userInfo.email} />
      <button type="button" className="btn btn-dark btn-sm mb-4" onClick={props.handleLogout}>logout</button>
      <TotalRounded transactions={props.transactions} receiverAccountInfo={props.receiverAccountInfo}/>
    </div>
  )
}

export default UserWindow