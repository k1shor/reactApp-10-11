import React from 'react'

const Props = (props) => {
    // destructuring object 
    // const {text, user} = props
    return (
        <>
            {/* <h1>{text} </h1> sent by <h2>{user}</h2> */}
            <h1> {props.text} sent by {props.user}</h1>
            
        </>
    )
}

export default Props
