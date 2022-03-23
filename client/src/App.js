import React, {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  const [result, setResult] = useState('')
  const [userInput, setUserInput] = useState()
  const [imageURL, setImageURL] = useState()

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
    }
    ).then((res) => {
      console.log(res.data)
      setResult(res.data.result)
    })
    .catch((error) => console.log(error))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type='file' 
        accept='image/jpg, image/png, image/jpeg, image/gif'
        name='input'
        onChange={handleInputChange}></input>
        <input type='submit'></input>
      </form>
      <img src={imageURL}></img>
      <img src={result}></img>
    </>

  )
}

export default App