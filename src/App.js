import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const randomNumber = parseInt(10000 * Math.random());
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WelcomeMessage firstName = "Marcuss" lastName = 'Aurelius' />
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
