import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Jumbotron from './page/components/Jumbotron';
import Form from './page/components/Form';


function App() {
  const [inputImage, setInput] = useState('')
  const [inputURL, setURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [outputImage, setOutput] = useState('')

  const fetchImage = async (data) => {
    const res = await fetch(
      'http://localhost:8890/image_greyscale',
      {method: 'POST', body: data}
    )
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setOutput(imageObjectURL);
  };


  useEffect(() => {
    if (!inputImage || inputImage === '' ) return;
    setURL(URL.createObjectURL(inputImage));

    const data = new FormData();
    data.append('file', inputImage);
    
    setLoading(true);
    fetchImage(data).then(() => setLoading(false));

  }, [inputImage]);


  function onImageChange(e) {
    setInput(e.target.files[0]);
  }


  return (
    <div className="App">
      <Jumbotron
        title={"Welcome to Sketch Project!!"}
        content={"Upload your image to process."}>
      </Jumbotron>
      <Form onChange={onImageChange}></Form>

      <img src={inputURL} style={{ width: '200px' }} />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={outputImage} style={{ width: '200px' }} />
      )}
    </div>
  )
}


export default App;
