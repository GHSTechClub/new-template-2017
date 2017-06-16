import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className= "navbar">
          <div className="logo">
            <img src={logo} alt=""/>
            <div className="logoText">
              <h3>Grossmot <span className='yellow'>High School</span></h3>
              <h1>Clubs</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
