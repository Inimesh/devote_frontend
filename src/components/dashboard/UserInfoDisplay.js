import React from 'react';
import Avatar from "avataaars"; // There are apparently vulnerabilities in avataaars dependencies

const UserInfoDisplay = (props) => {
  return (
    <div>
      <Avatar
        style={{ width: '100px', height: '100px' }}
        avatarStyle="Circle" />
      <h3>{props.username}</h3>
      <p>{props.email}</p>
    </div>
  )
}

export default UserInfoDisplay