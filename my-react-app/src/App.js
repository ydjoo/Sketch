import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [testData, setTestData] = useState(null);
  useEffect(() => {
    const testFetch = async() => {
      try {
        const response = await axios.get('http://localhost:8888/test-endpoint');
        setTestData(response.data);
        console.log(response.data)
      } catch (e) {
        console.error(e)
      }
    };
    testFetch();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          <h3>
            {testData}
          </h3>

        </a>
      </header>
    </div>
  );
}

export default App;
