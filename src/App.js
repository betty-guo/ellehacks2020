import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import businessform from './businessform.js'

class Example extends Component {
  render() {
    return (
      <div>
      <h1>Example page </h1>
      <Link to="/businessform"> Go back home </Link>
      </div>
      )
    }
  }

  class App extends Component {
    render() {
      return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route path="/businessform" component={businessform} eact />
      <Route path="/example" component={Example} exact />
      </Switch>
      </BrowserRouter>
      
      <h1>Welcome to Summation</h1>
      <h2>I am a... </h2>
      
      <button onclick="http://localhost:3000/businessform">Business</button>
      
      <button>Charity</button>
      </div>

      )
    }
  }

  // class App extends Component {
//   render() {
//   return (
//     <BrowserRouter>
//     <Switch>
//     <Route path= "/businessform" component= {businessform} exact />
//     </Switch>
//     </BrowserRouter>

//     <div className="App">
//     <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />


//     <p>
//     Welcome to Summation
//     <p>
//     I am a...
//     </p>
//     </p>
//     <buttonGroup variant="text" color="primary" aria-label="text primary button group">
//     <button>Business</button>
//     <button>Charity</button>
//     </buttonGroup>
//     </header>
//     </div>
//     );
//   }
// }

export default App
