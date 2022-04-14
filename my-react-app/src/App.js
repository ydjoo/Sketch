import './styles/App.css';
import React from 'react';
import Jumbotron from './page/components/Jumbotron';
import Form from './page/components/Form';
import ImageContainer from './page/components/ImageContainer';

function App() {

  return (<>
      <div className="App">
        <Jumbotron
          title={"Welcome to Sketch Project!!"}
          content={"Upload your image to process."}>
        </Jumbotron>
        <Form/>
        <ImageContainer/>
      </div>
      </>
  )
}

export default App;