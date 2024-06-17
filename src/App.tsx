import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>This is APP component</h2>
      <Rating/>
      <Accardion/>
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Star() {
  return (
    <span>Star </span>
  )
}

function Accardion() {
  return (
    <div>
      <h3>--MENU--</h3>
      <ul>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    </div>
  )
}

export default App;
