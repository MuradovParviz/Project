import logo from './logo.svg';
import './App.css';
import Header from './headers/Header';
import Footerr from './Footer/Footerr';
import Start from './Startss/Start';
import Profes from './Professional/Profes';
import Teaching from './teaching/Teaching';
import Sillabus from './sillabus/Sillabus';
import Manage from './managment/Manage';
import {Routes,Route,Link} from "react-router-dom";





function App() {
  return (
    <div className="App">
     <Header />
     <Manage />
     <Sillabus />
     <Teaching />
     <Profes />
     <Start />
     <Footerr />
    </div>
  );
}

export default App;
