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

    const ChangeState = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value 
        })
        console.log(state)
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
                
            </div>

            <button className="text-large mainButton">
                <UserSVG />
                Create Account
            </button>
        </form>
    )
}


export default Form