import './styles/App.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Jumbotron from './page/components/Jumbotron';
import Form from './page/components/Form';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ImageBox = styled.div`
  background-color: ${props => props.color || "palevioletred"};
  width : 500px;
  height : 400px;
`;

const Img = styled.img`
  max-width: 400px;
  max-height: 300px;
  margin-bottom: 20px;
`;

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

      <ImageContainer>
        <ImageBox color='cornflowerblue'>
          <h3>Input Image</h3>
          <Img src={inputURL} />
        </ImageBox>
        <ImageBox>
          <h3>Output Image</h3>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <Img src={outputImage}/>
          )}
        </ImageBox>
      </ImageContainer>
    </div>
  )
}


export default App;
