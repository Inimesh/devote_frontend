import React from 'react';


const UserInfoDisplay = (props) => {
  return (
    <div>
      <h3 class="username-font">{props.username}</h3>
      <p class="email-font">{props.email}</p>
    </div>
  )
}

export default UserInfoDisplay