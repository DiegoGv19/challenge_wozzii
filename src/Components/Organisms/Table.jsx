import React from 'react'
import Row from '../Molecules/row'
import withLoader from '../../HOC/withLoader'

const Table = ({users}) =>(
    <table className="tableUsers">
        <thead className="tableHead">
            <tr >
                <th className="tableElement text-bold">Name</th>
                <th className="tableElement text-bold">Lastname</th>
                <th className="tableElement text-bold">Be</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => <Row name={user.name} lastname={user.lastname} be ={user.be}  key={user.id}/>)
            }
        </tbody>

    </table>
)

export default withLoader("users", Table)