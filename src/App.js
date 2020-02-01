import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />


    <p>
    Welcome to Summation
    <p>
    I am a...
    </p>
    </p>
    <buttonGroup variant="text" color="primary" aria-label="text primary button group">
    <button>Business</button>
    <button>Charity</button>
    </buttonGroup>
    </header>
    </div>
    );
  }

  export default App;
