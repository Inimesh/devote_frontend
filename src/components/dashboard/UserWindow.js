import React from 'react';
import UserInfoDisplay from './UserInfoDisplay';
import Avatar from "avataaars"; // There are apparently vulnerabilities in avataaars dependencies
import { generateRandomAvatarOptions } from "./avatar.js"
import UserInfoMenu from './Navbar';

const UserWindow = (props) => {
  return (
    <div>
      {/* UserInfoDisplay */}
      {/* TotalRounded */}
      {/* UserInfoMenu */}
      <Avatar
        style={{ width: '100px', height: '100px' }}
        avatarStyle="Circle"
        {...generateRandomAvatarOptions() } />
      <UserInfoDisplay username={props.userInfo.username} email={props.userInfo.email} />
      <button type="button" className="btn btn-dark btn-sm mb-4" onClick={props.handleLogout}>logout</button>
    </div>
  )
}

export default UserWindow