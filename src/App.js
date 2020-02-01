import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import businessform from './businessform.js'
import charityform from './CharityForm'
import HomePage from './HomePage'

// class Example extends Component {
//   render() {
//     return (
//       <div>
//      <Link to="/businessform"> 
//      <button renderAs= "button">
//      <span>Example</span>
//      </button> </Link>
//       </div>
//       )
//     }
//   }


  class App extends Component {
    render() {
      return (

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/businessform" component={businessform} exact />
            <Route path="/charityform" component={charityform} exact />
          </Switch>
        </div>
      </BrowserRouter>


      )
    }
  }
  // class App extends Component {
  //   render() {
  //     return (
  //     <div>
  //     <BrowserRouter>
  //     <Switch>
  //     <Route path="/businessform" component={businessform} exact />
  //     <Route path="/example" component={Example} exact />
  //     </Switch>
  //     </BrowserRouter>
      
  //     <h1>Welcome to Summation</h1>
  //     <h2>I am a... </h2>

  //     <button>Business</button>
  //     <button>Charity</button>
  //     </div>

  //     )
  //   }
  // }

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
