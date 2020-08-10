import React from 'react'

const Row = ({name,lastname,be}) =>(
    <tr className="tableRow">
        <td className="tableElement text-normal">{name}</td>
        <td className="tableElement text-normal">{lastname}</td>
        <td className="tableElement text-normal">{be}</td>
    </tr>
)

export default Row
