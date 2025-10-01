import './App.css';
// import {getEmotionImgById} from './Util';
import { Link, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <div className="App">
      <div>
        <Link to={"/"}>Home </Link> / 
        <Link to={"/new"}>New </Link> / 
        <Link to={"/diary"}>Diary </Link> / 
        <Link to={"/edit"}>Edit </Link>
      </div>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
