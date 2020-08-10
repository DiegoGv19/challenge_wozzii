import React,{useEffect,useState} from 'react'

import {db} from './../../firebase/config'

import './../../firebase/config'
import Table from './../Organisms/Table'
import Information from '../Molecules/Information'

const Users = () =>{

    const [users, setUsers] = useState([])
    

    const getUsers = async () =>{
        const querySnapshot = await db.collection('users').get()
        const arrayUsers = []
        querySnapshot.forEach(doc =>{
            arrayUsers.push({...doc.data(), id:doc.id })
        })
        setUsers(arrayUsers)
    }

    useEffect(()=>{
        getUsers()
    },[])
    

    return(   
        <div  className="mainContainer">
             <Information title="Users" paragraph="List of all registered users"/>
        
            <Table users={users} />
        </div>
    )
}

export default Users