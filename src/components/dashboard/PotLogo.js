import React from 'react'
import cancerResearchLogo from '../../../src/cancer-research.png'
import bhfLogo from '../../../src/bhf.png'


const PotLogo = (props) => {
    
    const logoselector = (passedname) => {
        if (passedname === "Cancer Research") {
            return cancerResearchLogo
        } else if (passedname === "British Heart Foundation") {
            return bhfLogo
        }
    }

    return (
        <div>
            <img src={logoselector(props.accountName)} alt="" height="50" wide="50" />
        </div>
    )
}


export default PotLogo;
