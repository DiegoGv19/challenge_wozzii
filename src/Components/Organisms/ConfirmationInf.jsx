import React from 'react'
import {Link} from 'react-router-dom'
import withLoader from '../../HOC/withLoader'
import ConfirmationSVG from '../Molecules/ConfirmationSVG'


const ConfirmationInf = ({confirmation,be}) => (
    <>
        <ConfirmationSVG /> 
    
        <p className="text-confirmation text-large">Your
            {
                be === "student" ? 
                <span className="student"> {be} </span>
                :
                <span className="youtuber"> {be} </span>
            } 
        account have been created !</p>

        <Link className="text-bold text-link" to="/users">See users</Link>
    </>
)

export default withLoader(ConfirmationInf)