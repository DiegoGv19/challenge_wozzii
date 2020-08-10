import React, {Component} from 'react'
import Loader from './../Components/Molecules/Loader'

const withLoader = (WrappedComponent) => {
    return class WithLoader extends Component
        {

            render(){
                return(
                this.props.confirmation?
                <WrappedComponent {...this.props} />
                :
                <Loader/>
                )
            }
        }
}


export default withLoader