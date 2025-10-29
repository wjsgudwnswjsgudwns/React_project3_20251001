// custom hook
import { useEffect, useState } from "react";
// import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// URL 파라미터로 받은 id로 일기 데이터를 불러오고,
// 일치하는 데이터가 없으면 Home 페이지로 되돌려 보내는 기능 커스텀 훅
const useDiary = (id) => {
  // const data = useContext(DiaryStateContext);

  const [diary, setDiary] = useState();
  const navigate = useNavigate();
  // useEffect(() => {
  //     const matchDiary = data.find((item) => (String(item.id) === String(id)))
  //     //유저가 클릭한 id와 일치하는 일기 찾기

  //     if (matchDiary) {
  //         setDiary(matchDiary)
  //     } else {
  //         alert("존재하지 않는 글입니다");
  //         navigate("/", {replace:true});
  //     }

  // },[id , data]);

  // DB에서 일기 가져오기
  useEffect(() => {
    axios
      .get(`http://43.203.95.217/api/diary/${id}`)
      .then((res) => {
        // 해당 id의 일기가 res에 저장
        if (res.data) {
          setDiary(res.data);
        } else {
          alert("존재하지 않는 일기 입니다.");
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.error(err);
        alert("존재하지 않는 일기 입니다.");
        navigate("/", { replace: true });
      });
  });

  return diary;
};

export default useDiary;
