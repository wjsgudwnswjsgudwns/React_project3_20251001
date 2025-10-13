import './App.css';
// import {getEmotionImgById} from './Util';
import { Link, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

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
    return state.filter((item) => String(item.id) !== String(action.targetId));
  }
  case "INIT": {
    return action.data;
  } 
  default:
    return state;
  }

}

export const DiaryStateContext = React.createContext();
//Context 생성
export const DiaryDispatchContext = React.createContext();
// 자식 컴포넌트에 전달해줄 함수만 분리

function App() {

  const [isDataLoaded,setIsDataLoaded] = useState(false);

  // const mockData = [
  //   {
  //     id : "mock1",
  //     date : new Date().getTime()-1,
  //     content : "mock1이 쓴 일기",
  //     emotionId : 1
  //   },
  //   {
  //     id : "mock2",
  //     date : new Date().getTime()-2,
  //     content : "mock2이 쓴 일기",
  //     emotionId : 2
  //   },
  //   {
  //     id : "mock3",
  //     date : new Date().getTime()-3,
  //     content : "mock3이 쓴 일기",
  //     emotionId : 1
  //   }
  // ]

  // useEffect(() => {
  //   dispatch ({
  //     type : "INIT",
  //     data : mockData
  //   })
  //   setIsDataLoaded(true);
  // },[]); // 최초 마운트 될때만 1회 실행

  //데이터 베이스에 저장된 일기 목록 가져오기
  useEffect(() => {
    axios.get("http://localhost:8888/api/diary")
    .then((res) => {
      dispatch ({
      type : "INIT",
      data : res.data
      });
      setIsDataLoaded(true);
    })
    .catch();
  },[]);


  //const [state,setState] = useState();
  const[data,dispatch] = useReducer(reducer, []);
  // data -> 일기(일기 객체)들이 들어있는 배열
  // data -> [{일기1},{일기2}...]
  const idRef = useRef(0); // 일기의 ID 생성 변수

  // const onCreate = (date, content, emotionId) => {
  //   dispatch ({
  //     type : "CREATE",
  //     data : {
  //       id : idRef.current,
  //       date : new Date(date).getTime(),
  //       content,
  //       emotionId
  //     }
  //   });
  //   idRef.current++;
  // };

  const onCreate = (date, content, emotionId) => {
    axios.post("http://localhost:8888/api/diary", {date : new Date(date).getTime(),content,emotionId})
    .then((res) => { // res -> 올바른 응답에 대한 응답 결과 -> db에 삽입된 새 일기
      dispatch({
        type : "CREATE",
        data : res.data
      })
    })
  };

  // const onUpdate = (targetId,date, content, emotionId) => {
  //   dispatch ({
  //     type : "UPDATE",
  //     data : {
  //       id : targetId,
  //       date : new Date(date).getTime(),
  //       content,
  //       emotionId 
  //     }
  //   });
  // };

  // 일기 수정
  const onUpdate = (targetId,date, content, emotionId) => {
    axios.put(`http://localhost:8888/api/diary/${targetId}`, {date : new Date(date).getTime(),content,emotionId})
    .then((res) => { // res -> 올바른 응답에 대한 응답 결과 -> db에 삽입된 새 일기
      dispatch({
        type : "UPDATE",
        data : res.data
      })
    })
  };

  // const onDelete = (targetId) => {
  //   dispatch ({
  //     type : "DELETE",
  //     targetId
  //   });
  // };

  const onDelete = (targetId) => {
    axios.delete(`http://localhost:8888/api/diary/${targetId}`)
    .then(
      dispatch({
        type : "DELETE",
        targetId
      })
    )
    .catch();
  };


  if(isDataLoaded) { // true -> 로딩 완, false -> 로딩중
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
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
              <Route path="/edit/:id" element={<Edit />}></Route>
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  } else {
    return <div>데이터를 불러오는 중입니다</div>
  }
  
}

export default App;
