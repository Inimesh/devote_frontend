import React from 'react'
import Pot from './Pot'

const Pots = (props) => {
  return (
    <div>
      {/* Dynamically render lots of Pot components here */}
      <Pot className={true} accountName={true} amount={true}/>
    </div>
  )
}

export default Pots