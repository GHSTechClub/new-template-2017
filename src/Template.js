import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var active = window.location.href;
// eslint-disable-next-line
open1 = 'black';
// eslint-disable-next-line
open2 = 'black';
// eslint-disable-next-line
if(active !== "./clubs/Search"){
  var open1 = 'yellow'
}else{
  var open2 = 'yellow'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className= "navbar">
          <div className="logo">
            <img src={logo} alt=""/>
            <div className="logoText">
              <h3>Grossmont <span className='yellow'>High School</span></h3>
              <h1>Clubs</h1>
            </div>
          </div>
          <div className="topright">
            <div className="sideTrigger"></div>
            <div className="sideTrigger"></div>
            <div className="sideTrigger"></div>
          </div>
          <div className="sidebar">
            <h1><span className={open1 + " navLink"}>Home</span></h1>
            <h1><span className={open2 + " navLink"}>Clubs</span></h1>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
