import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rating } from './components/Rating/Rating';
import Accardion from './components/Accardion/Accardion';

function App() {
  return (
    <div className="App">
      <TitleApp title={"Article №1"}/>
      <Rating value={3}/>
      <Accardion title={"--MENU-- #1"}/>
      <Accardion title={"--MENU-- #2"}/>
      <TitleApp title={"Article №2"}/>
      <Rating value={1}/>
    </div>
  );
}

const TitleApp = (props: any) => {
  return (
    <h2>{props.title}</h2>
  )
}

export default App;
