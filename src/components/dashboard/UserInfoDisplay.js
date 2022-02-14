import React from 'react'

const UserInfoDisplay = (props) => {
  return (
    <div>
      <p>*Avatar picture here*</p>
      <h2>{props.username}</h2>
      <h3>{props.email}</h3>
    </div>
  )
}

export default UserInfoDisplay