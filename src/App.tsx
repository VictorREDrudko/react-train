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
      <AccardionTitle/>
      <AccardionBody/>
    </div>
  )
}

function AccardionTitle() {
  return (
    <h3>--MENU--</h3>
  )
}

function AccardionBody() {
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  )
}

export default App;
