import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import useDiary from "../hooks/useDiary";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Editor from "../component/Editor";

const Edit = () => {

    const {id} =useParams(); // id
    const data = useDiary(id); // 유저가 클릭한 글의 id와 일치하는 일기 객체

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const onClickDelete = () => {
        if(window.confirm("일기를 정말 삭제할까요?")) { 
            onDelete(id); // 해당 아이디의 일기 삭제
            navigate("/", {replace:true});
        }
        
    };

    const onSubmit = (data) => {
        if(window.confirm("일기를 정말 수정할까요?")) {
        const {date,content,emotionId} = data;
        onUpdate(id,date,content,emotionId);
        navigate("/",{replace:true});
        }
    }

    if(!data) {
        return <div>일기를 불러오고 있습니다...</div>
    } else {
        return (
            <div>
                <Header title={"일기 수정하기"} 
                        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
                        rightChild={<Button text={"삭제하기"} type={"negative"} onClick={onClickDelete} />}
                />
                <Editor initData={data} onSubmit={onSubmit}/>
            </div>
        );
    };

}

export default Edit;