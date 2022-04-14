import React, { useContext } from 'react'

import { StyleTransferContext } from '../states/StyleTransferContext'


function ShowImage() {
    const {imageURL, resultURL} = useContext(StyleTransferContext)
    return (
        <>
            <img src={imageURL} width={"50%"} ></img>
            <img src={resultURL} width={"50%"}></img>
        </>

    )
}

export default ShowImage