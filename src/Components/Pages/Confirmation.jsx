import React,{useEffect,useState} from 'react'
import ConfirmationInf from './../Organisms/ConfirmationInf'


import {db} from './../../firebase/config'

import './../../firebase/config'



const Confirmation = ({match}) => {

    const [result, setResult] = useState([])

    
    const [user] = useState({
        name: match.params.name,
        lastname:match.params.lastname,
        be: match.params.be
    })

   
    const saveFirebase= async () =>{
        await db.collection('users').doc().set(user)
        setResult([user.be])
    }

    
    useEffect(()=>{
        saveFirebase()
    },[])
 
    return(
        <div className="informationContainer">
            

            <ConfirmationInf be={result} />

        </div>
    )
}

export default Confirmation
