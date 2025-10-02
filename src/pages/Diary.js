import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary.js";
import Header from "../component/Header.js";
import Button from "../component/Button.js";
import { getFormattedDate } from "../Util.js";
import Viewer from "../component/Viewer.js";

const Diary = () => {

    const {id} = useParams(); //@PathVariable String id와 유사
    const data = useDiary(id);
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    if(data) {

        const {date, emotionId, content} = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

        return (
            <div>
                <Header title={title} 
                    leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
                    rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                />
                <Viewer content={content} emotionId={emotionId}/>
            </div>
        );
    } else {
        return <div>일기를 불러오는 중입니다.</div>
    }
}

export default Diary;