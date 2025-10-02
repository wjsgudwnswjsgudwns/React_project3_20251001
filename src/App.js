import './App.css';
// import {getEmotionImgById} from './Util';
import { Link, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import { useEffect, useReducer, useRef } from 'react';

function reducer (state,action) {
switch (action.type) {
  case "CREATE": {
    return [action.data, ...state];
    // return [새로만든 일기, 기존 일기] -> state = data를 의미
  }
  case "UPDATE": {
    return state.map((item) => 
      // 기존 일기 중에 수정하려고 하는 일기의 아이디를 찾음
      String(action.data.id) === String(item.id) ? {...action.data} : item
    );
  } 
  case "DELETE": {
    return state.filter((item) => String(it.id) !== String(action.targetId));
  }
  case "INIT": {
    return action.data;
  } 
  default:
    return state;
  }

  
}

function App() {

  const mockData = [
    {
      id : "mock1",
      date : new Date().getTime(),
      content : "mock1이 쓴 일기",
      emotionId : 1
    },
    {
      id : "mock2",
      date : new Date().getTime(),
      content : "mock2이 쓴 일기",
      emotionId : 2
    },
    {
      id : "mock3",
      date : new Date().getTime(),
      content : "mock3이 쓴 일기",
      emotionId : 1
    }
  ]

  useEffect(() => {
    dispatch ({
      type : "INIT",
      data : mockData
    })
  },[]) // 최초 마운트 될때만 1회 실행

  //const [state,setState] = useState();
  const[data,dispatch] = useReducer(reducer, []);
  // data -> 일기(일기 객체)들이 들어있는 배열
  // data -> [{일기1},{일기2}...]
  const idRef = useRef(0); // 일기의 ID 생성 변수

  const onCreate = (date, content, emotionId) => {
    dispatch ({
      type : "CREATE",
      data : {
        id : idRef.current,
        date : new Date(date).getTime(),
        content,
        emotionId
      }
    });
    idRef.current++;
  };

  const onUpdate = (targetId,date, content, emotionId) => {
    dispatch ({
      type : "UPDATE",
      data : {
        id : targetId,
        date : new Date(date).getTime(),
        content,
        emotionId 
      }
    });
  };

  const onDelete = (targetId) => {
    dispatch ({
      type : "DELETE",
      targetId
    });
  };

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
