// custom hook
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// URL 파라미터로 받은 id로 일기 데이터를 불러오고,
// 일치하는 데이터가 없으면 Home 페이지로 되돌려 보내는 기능 커스텀 훅
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);

    const [diary,setDiary] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const matchDiary = data.find((item) => (String(item.id) === String(id)))
        //유저가 클릭한 id와 일치하는 일기 찾기
        
        if (matchDiary) {
            setDiary(matchDiary)
        } else {
            alert("존재하지 않는 글입니다");
            navigate("/", {replace:true});
        }

    },[id , data]);

    return diary;
}

export default useDiary;