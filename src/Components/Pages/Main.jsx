import React from 'react'
import Form from '../Organisms/Form'


const Main = () => (
    <div className="mainContainer">
        <div className="formInformation">
            <h2 className="text-large formTitle" >Tell us about you</h2>
            <p className="text-normal">Please tell a bit about you so that we can personalize your onboarding experience</p>
        </div>
        <Form />
    </div>
    
)

export default Main
