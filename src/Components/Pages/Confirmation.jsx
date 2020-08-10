import React,{useEffect} from 'react'
import ConfirmationInf from './../Organisms/ConfirmationInf'
import { useState } from 'react'


import {db} from './../../firebase/config'

import './../../firebase/config'



const Confirmation = ({match}) => {

    const [result, setResult] = useState(false)
    const [user] = useState({
        name: match.params.name,
        lastname:match.params.lastname,
        be: match.params.be
    })

   
    const saveFirebase= async () =>{
        await db.collection('users').doc().set(user)
        setResult(true)
    }

    useEffect(()=>{
        saveFirebase()
    },[])
 
    return(
        <div className="informationContainer">
            

            <ConfirmationInf confirmation={result} be={match.params.be}/>

        </div>
    )
}

export default Confirmation
