import React,{useState} from 'react'

import StudentSVG from '../Molecules/StudentSVG'
import YoutuberSVG from '../Molecules/YoutuberSVG'
import UserSVG from '../Molecules/UserSVG'


const Form = () => {

    const [ state, setState] = useState({
        name: "",
        lastname: "",
        be: ""


    })

    const [ error, setError] = useState({
        name: false,
        lastname: false,
        be: false

        
    })

    const ChangeError = (valueName,valueLastName,valueBe) =>{
        setError({
            ...error,
            "name": valueName,
            "lastname":valueLastName,
            "be": valueBe
        })
    }


    const ValidadeError = e => {
        if(state[e] === "")
        {
            return true
        }
        else
        {
            return false
        }
    }

    const Error = () =>{
        const name = ValidadeError("name")
        const lastname = ValidadeError("lastname")
        const be = ValidadeError("be")

        ChangeError(name,lastname,be)
    }

    const Validate = e => {
        e.preventDefault()
        if(state.name !== "" && state.lastname !== "" && state.be!== "" )
        {
            window.location.replace(`/confirmation/${state.be}`)
        }
        else{
            Error()
        }


    }

    const ChangeState = e =>{
        setState({
            ...state,
            [e.target.name] : e.target.value 
        })


    } 


    return(  
        <form className="formMain" action="">
            <div className="formField">
                <label className="formLabel text-bold" htmlFor="name">Name</label>
                <input 
                    className="inputs-style formInput " 
                    type="text"
                    placeholder="Your name..."
                    name="name"
                    onChange={ChangeState.bind(this)}
                    />
                {
                    error.name ? 
                    <p className="errorInput text-normal">You must enter a name</p>
                    :
                    <></>
                }
                
            </div>

            <div className="formField">
                <label className="formLabel text-bold" htmlFor="name">Last Name</label>
                <input 
                    className="inputs-style formInput " 
                    type="text"
                    placeholder="Your name..."
                    name="lastname"
                    onChange={ChangeState.bind(this)}

                    />
                {
                    error.lastname ? 
                    <p className="errorInput text-normal">You must enter a last name</p>
                    :
                    <></>
                }
            </div>

            <div >
                <p  className="formLabel text-bold">I'm a</p>
                <div className="containerFlex">  
                    <div className="groupRadio">
                        <input 
                            className="formInputRadio checkedStudent " 
                            type="radio"
                            placeholder="Your name..."
                            name="be"
                            value="student"
                            id="beStudent"
                            onChange={ChangeState.bind(this)}
                            />
                        <label className="labelRadio formLabel text-bold" htmlFor="beStudent">
                            <StudentSVG />
                            Student
                        </label>
                        
                    </div>

                    <div className="groupRadio">
                        <input 
                            className="formInputRadio checkedYoutuber " 
                            type="radio"
                            placeholder="Your name..."
                            name="be"
                            value="youtuber"
                            id="beYoutuber"
                            onChange={ChangeState.bind(this)}
                        />
                        <label className="labelRadio formLabel text-bold" htmlFor="beYoutuber">
                            <YoutuberSVG />
                            Youtuber
                        </label>
                        
                    </div>
                </div>
                {
                    error.be ? 
                    <p className="errorInput text-normal">You must select one of the two options</p>
                    :
                    <></>
                }
            </div>

            <button type="submit" className="text-large mainButton" to ="/confirmation" onClick={Validate.bind(this)}>
                <UserSVG />
                Create Account
            </button>
        </form>
    )
}


export default Form