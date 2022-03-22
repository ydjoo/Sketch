import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [inputImage, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [outputImage, setOutput] = useState('')

  const fetchImage = async (data) => {
    const res = await fetch(
      'http://localhost:8890/image_upload',
      {method: 'POST',body: data}
    )
    console.log(res);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setOutput(imageObjectURL);
  };

  useEffect(() => {
    if (inputImage === '') return;

    const data = new FormData();
    data.append('file', inputImage);
    
    setLoading(true);
    fetchImage(data);
    setLoading(false);

  }, [inputImage]);

  function onImageChange(e) {
    setInput(e.target.files[0]);
  }

  /*
  const uploadImage = async e => {
    console.log(e);
    const files = e.target.files
    setInput(files[0])

    const data = new FormData()
    data.append('file', files[0])
    //data.append('upload_preset', 'darwin')
    console.log(files);
    setLoading(true)

    console.log(data);
    const res = await fetch(
      'http://localhost:8890/image_upload',
      {
        method: 'POST',
        body: data
      }
    )
    console.log(res);
    const file = await res.json()
    console.log(file);

    setOutput(file.secure_url)

    setLoading(false)
  }
  */

  return (
    <div className="App">
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={onImageChange}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={outputImage} style={{ width: '300px' }} />
      )}
    </div>
  )
}


export default App;
