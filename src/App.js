import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var randomNumber = parseInt(10000 * Math.random());
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WelcomeMessage firstName = "Will" lastName = 'Lowry' />
        </div>
        <p className="App-intro">
          This site will send texts to phone numbers to start.
        </p>        
        <p className="App-intro">
          {randomNumber} requests sent!
        </p>
      </div>
    );
  }
}

export default App;
