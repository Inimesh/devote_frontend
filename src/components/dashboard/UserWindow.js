import React from 'react'
import TotalRounded from './TotalRounded'
import UserInfoDisplay from './UserInfoDisplay'
import UserInfoMenu from './Navbar'

const UserWindow = (props) => {
  return (
    <div>
      <UserInfoDisplay username={props.userInfo.username} email={props.userInfo.email} />
      <TotalRounded transactions={props.transactions} receiverAccountInfo={props.receiverAccountInfo}/>
    </div>
  )
}

export default UserWindow