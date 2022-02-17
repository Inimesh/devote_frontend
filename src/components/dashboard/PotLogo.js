import React from 'react'
import cancerResearchLogo from '../../../src/cancer-research.png'
import bhfLogo from '../../../src/bhf.jpg'
import savingsLogo from '../../../src/savingsLogo.png'
import investingLogo from '../../../src/investing.png'


const PotLogo = (props) => {
    
    const logoselector = (passedname) => {
        if (passedname === "Cancer Research") {
            return cancerResearchLogo
        } else if (passedname === "British Heart Foundation") {
            return bhfLogo
        } else if (passedname === "Savings") {
            return savingsLogo
        } else if (passedname === "Investing") {
            return investingLogo
        }
    }

    return (
        <div>
            <img src={logoselector(props.accountName)} alt="" height="60" wide="60"/>
        </div>
    )
    
}

export default PotLogo;
