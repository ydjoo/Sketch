import React from 'react'

function ShowImage(props) {
    return (
        <>
            <img src={props.imageURL} width={"50%"} ></img>
            <img src={props.resultURL} width={"50%"}></img>
        </>

    )
}

export default ShowImage