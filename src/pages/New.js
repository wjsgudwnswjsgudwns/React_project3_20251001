import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";

const New = () => {

    const {onCreate} = useContext(DiaryDispatchContext);

    const onSubmit = (data) => { // data -> 새로 쓴일기 객체(date,contetn,emotionId)
        const {date, content, emotionId} = data;
        onCreate(date,content,emotionId);
        navigate("/", {replace:true});
    };

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <Header title={"새 일기 쓰기"} 
                    leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;