import './App.css';
import { Rating } from './components/Rating/Rating';
import Accardion from './components/Accardion/Accardion';
import { Switch } from './components/Switch/Switch';
import { UncontrolSwitch } from './components/UncontrolSwitch/UncontrolSwitch';
import { UnControlAcc } from './components/UncontrolAcc/UncontrolAcc';
import { UncontrolRating } from './components/UncontrolRating/UncontrolRating';

function App() {
  return (
    <div className="App">
      <TitlePage title={"Article №1"}/>
      <Accardion titleValue={"--MENU-- #1"} collapsed={true}/>
      <Accardion titleValue={"--MENU-- #2"} collapsed={false}/>
      <TitlePage title={"Article №2"}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Switch switching={true}/>
      <Switch switching={false}/>
      <UncontrolSwitch/>
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
