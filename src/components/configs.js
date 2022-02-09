import React from 'react';

function Configs(props) {
  return (
    <div>
      {props.configs.map((config) => {
        return (
          <div key={config.id}>
            <h2>{config.round_up_to}</h2>
            <h2>{config.percentage}</h2>
            <h2>{config.round_up_cap}</h2>
          </div>
        );
      })}
    </div>
  )
}

export default Configs