import './App.css';
import { Rating, ValueProps } from './components/Rating/Rating';
import Accardion from './components/Accardion/Accardion';
import { Switch } from './components/Switch/Switch';
import { UncontrolSwitch } from './components/UncontrolSwitch/UncontrolSwitch';
import { UnControlAcc } from './components/UncontrolAcc/UncontrolAcc';
import { UncontrolRating } from './components/UncontrolRating/UncontrolRating';
import { useState } from 'react';

function App() {
  const [valueRating, setValueRating] = useState<ValueProps>(0);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [on, setOn] = useState<boolean>(false);


  return (
    <div className="App">
      <TitlePage title={"Article №1"}/>
      <Accardion titleValue={"--MENU-- #1"} collapsed={isCollapsed} setIsCollapsed={()=>setIsCollapsed(!isCollapsed)}/>
      <TitlePage title={"Article №2"}/>
      <Rating value={valueRating} setValueRating={setValueRating}/>
      <Switch switching={on} setOn={setOn}/>
      <UncontrolSwitch onChange={setOn}/> {on.toString()}
      <UnControlAcc titleValue={"--UNCONTROLMENU-- #3"}/>
      <UncontrolRating/>
    </div>
  );
}

type TitlePageProps = {
  title: string
}

const TitlePage = (props: TitlePageProps) => {
  return (
    <h2>{props.title}</h2>
  )
}

export default App;
