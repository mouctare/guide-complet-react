import React from 'react'
import Message from './Message'

const Welcome = ({message}) => {
    return (
        <div>
            <h1>{message}</h1>
           <Message/> 
        </div>
    )
}

export default Welcome
