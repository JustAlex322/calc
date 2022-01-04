import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { 
    firstNum:0,
    secondNum:0,
    res:0
  }
  componentDidMount() {
    window.calc.mount();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Приложение 
          </p>
          <div id="calc-app"></div>
        </header>
      </div>
    );
  }
}

export default App;
