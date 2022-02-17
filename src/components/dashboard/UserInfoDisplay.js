import React from 'react';


const UserInfoDisplay = (props) => {
  return (
    <div>
      <h3>{props.username}</h3>
      <p>{props.email}</p>
    </div>
  )
}

export default UserInfoDisplay