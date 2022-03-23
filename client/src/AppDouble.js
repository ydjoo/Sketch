import React, {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  const [result, setResult] = useState(0)
  const [userInput, setUserInput] = useState(0)

  // GET
  // useEffect(() => {
  //   axios.get("/result")
  //   .then((res) => console.log(res.data))
  //   .catch((error) => console.log(error))
  // })

  function handleInputChange(event) {
    setUserInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // POST
    axios.post("/calculate/double",
      {input: userInput},
      {headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }}
    ).then((res) => setResult(res.data.result))
    .catch((error) => console.log(error))

    // fetch('/calculate/double', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     input: userInput
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // }).then(response => response.json())
    //   .then(message => {
    //     setResult(message.result)
    //   })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='number' required value={userInput} onChange={handleInputChange}></input>
        <input type='submit'></input>
      </form>
      <div>
        {(typeof result === 'undefined') ? (
          <p>Loading...</p>
        ): (result)
        }
      </div>
    </>

  )
}

export default App