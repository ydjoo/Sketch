import './styles/App.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Jumbotron from './page/components/Jumbotron';
import Form from './page/components/Form';
import ImageContainer from './page/components/ImageContainer';
import { useStores } from './page/stores/Context';
import { Observer, observer } from "mobx-react";


const App = observer( () => {

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
})

export default App;