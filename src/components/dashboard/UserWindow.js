import React from 'react'
import TotalRounded from './TotalRounded'
import UserInfoDisplay from './UserInfoDisplay'
import UserInfoMenu from './UserInfoMenu'

const UserWindow = (props) => {
  return (
    <div>
      {/* UserInfoDisplay */}
      {/* TotalRounded */}
      {/* UserInfoMenu */}
      <UserInfoDisplay username={props.userInfo.username} />
      <TotalRounded transactions={true}/>
      <UserInfoMenu />
      
    </div>
  )
}

export default UserWindow