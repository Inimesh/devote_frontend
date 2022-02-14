import React from 'react'

const UserInfoDisplay = (props) => {
  return (
    <div>
      {/* Avatar picture */}
      <h2>{props.username}</h2>
    </div>
  )
}

export default UserInfoDisplay