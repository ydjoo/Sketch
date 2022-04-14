import React from 'react'
import { useState } from 'react'

import PostImage from './PostImage'
import ShowImage from './ShowImage'


function StyleTransferPage() {
    const [resultURL, setResultURL] = useState()
    const [imageURL, setImageURL] = useState()
    
    return (
        <>
        <PostImage setResultURL={setResultURL} setImageURL={setImageURL}/>
        <ShowImage resultURL={resultURL} imageURL={imageURL}/>
        </>
    )
}

export default StyleTransferPage