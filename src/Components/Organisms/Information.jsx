import React from 'react'
import PropTypes from 'prop-types'

const Information = ({title,paragraph}) => (
    <div className="information">
        <h2 className="text-large InformationTitle" >{title}</h2>
        <p className="text-normal">{paragraph}</p>
    </div>
)
Information.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}

Information.defaultProps = {
    title: "there is no title",
    paragraph: "there is no paragraph"
}


export default Information