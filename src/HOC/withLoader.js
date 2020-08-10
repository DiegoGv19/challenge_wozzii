import React, {Component} from 'react'
import Loader from './../Components/Molecules/Loader'

const withLoader = (value,WrappedComponent) => {
    return class WithLoader extends Component
        {
            
            render(){
                return(
                    this.props[value].length === 0 ?
                    <Loader/>
                    :
                    <WrappedComponent {...this.props} />
                    
                )
            }
        }
}


export default withLoader