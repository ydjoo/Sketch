import React, { useContext } from 'react'
import { useState } from 'react'

import PostImage from './PostImage'
import ShowImage from './ShowImage'
import { StyleTransferContext } from '../states/StyleTransferContext'
import { StyleTransferStore } from '../states/StyleTransferStore'


const styletransferStore = new StyleTransferStore()

function StyleTransferPage() {
    // const [resultURL, setResultURL] = useState()
    // const [imageURL, setImageURL] = useState()
    // const {resultURL, imageURL} = useContext(StyleTransferContext)
    
    return (
        <>
        <StyleTransferContext.Provider value={styletransferStore}>
            <PostImage />
            <ShowImage />
        </StyleTransferContext.Provider>

        </>
    )
}

export default StyleTransferPage