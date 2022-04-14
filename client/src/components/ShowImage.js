import React, { useContext } from 'react'
import { observer } from 'mobx-react'

import { StyleTransferContext } from '../states/StyleTransferContext'


const ShowImage = observer(() => {
    const styletransferStore = useContext(StyleTransferContext)
    return (
        <>
            <img src={styletransferStore.imageURL} width={"50%"} ></img>
            <img src={styletransferStore.resultURL} width={"50%"}></img>
        </>
    )
})

export default ShowImage