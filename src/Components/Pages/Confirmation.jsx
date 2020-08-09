import React from 'react'
import ConfirmationSVG from '../Molecules/ConfirmationSVG'


const Confirmation = ({type}) => (

    <div className="informationContainer">
        
        <ConfirmationSVG /> 
        {
            type==='student' ? 
            <p className="text-confirmation text-large">Your <span className="student">{type}</span> account have been created !</p>
            :
            <p className="text-confirmation text-large">Your <span className="youtuber">{type}</span> account have been created !</p>
        }
    </div>
)

export default Confirmation
