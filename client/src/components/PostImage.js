import React, { useState, useContext } from 'react'
import axios from 'axios'

import { StyleTransferContext } from '../states/StyleTransferContext'


function PostImage() {
    const [userInput, setUserInput] = useState()
    const {setImageURL, setResultURL} = useContext(StyleTransferContext)

    function handleInputChange(event) {
        const file = event.target.files[0]
        setUserInput(file)

        // for preview
        const reader = new FileReader()
        reader.onloadend = () => {
        setImageURL(reader.result)
        }
        reader.readAsDataURL(file)
    }
  
    function handleSubmit(event) {
        event.preventDefault()

        const data = new FormData()
        data.append('file', userInput)

        // POST
        axios({
        method: 'post',
        url: '/grayscale',
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
        responseType: 'blob',
        })
        .then((res) => {
        const responseBlob = new Blob([res.data], {type:"image/jpeg"});
        const fileURL = URL.createObjectURL(responseBlob);
        setResultURL(fileURL)
        })
        .catch((error) => console.log(error))
    }

    return (
        <form>
            <input 
            type='file' 
            accept='image/jpg, image/png, image/jpeg, image/gif'
            name='input'
            onChange={handleInputChange}></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default PostImage