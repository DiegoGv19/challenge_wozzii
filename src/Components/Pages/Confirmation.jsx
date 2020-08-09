import React from 'react'
import ConfirmationSVG from '../Molecules/ConfirmationSVG'


const Confirmation = ({match}) => (

    <div className="informationContainer">
        
        <ConfirmationSVG /> 
        {
            <p className="text-confirmation text-large">Your
            {
                match.params.be === "student" ? 
                <span className="student"> {match.params.be} </span>
                :
                <span className="youtuber"> {match.params.be} </span>
            } 
            account have been created !</p>
        }
    </div>
)

export default Confirmation
