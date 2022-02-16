import React from 'react';
import Avatar from "avataaars"; // There are apparently vulnerabilities in avataaars dependencies

const UserInfoDisplay = (props) => {
  return (
    <div>
      <Avatar
        style={{ width: '100px', height: '100px' }}
        avatarStyle="Circle" />
      <h2>{props.username}</h2>
      {/* <h3>{props.email}</h3> */}
    </div>
  )
}

export default UserInfoDisplay