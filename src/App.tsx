import React from 'react';
import logo from './logo.svg';
import './App.css';
import './vector.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"/vector.png"} className="App-logo" alt="logo" />
        <p>
          <span className="direction">~Direction~</span> and <span className="magnitude">Magnitude</span>
          <br></br>OH YEAH!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
