import React from 'react'
import { useState } from 'react'

import PostImage from './PostImage'
import ShowImage from './ShowImage'
import { StyleTransferContext } from '../states/StyleTransferContext'


function StyleTransferPage() {
    const [resultURL, setResultURL] = useState()
    const [imageURL, setImageURL] = useState()
    
    return (
        <>
        <StyleTransferContext.Provider value={{resultURL, setResultURL, imageURL, setImageURL}}>
            <PostImage />
            <ShowImage />
        </StyleTransferContext.Provider>

        </>
    )
}

export default StyleTransferPage