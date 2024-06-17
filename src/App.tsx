import './App.css';
import { Rating } from './components/Rating/Rating';
import Accardion from './components/Accardion/Accardion';

function App() {
  return (
    <div className="App">
      <TitlePage title={"Article №1"}/>
      <Rating value={3}/>
      <Accardion titleValue={"--MENU-- #1"} collapsed={true}/>
      <Accardion titleValue={"--MENU-- #2"} collapsed={false}/>
      <TitlePage title={"Article №2"}/>
      <Rating value={1}/>
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
