import React from 'react'
import {Link} from 'react-router-dom'
import withLoader from '../../HOC/withLoader'
import ConfirmationSVG from '../Molecules/ConfirmationSVG'


const ConfirmationInf = ({be}) => (
    <>
        <ConfirmationSVG /> 
    
        <p className="text-confirmation text-large">Your
            {
                be[0] === "student" ? 
                <span className="student"> Student </span>
                :
                <span className="youtuber"> Youtuber </span>
            } 
        account have been created !</p>

        <Link className="text-bold text-link" to="/users">See users</Link>
    </>
)

export default withLoader("be",ConfirmationInf)