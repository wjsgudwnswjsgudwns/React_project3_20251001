import { useParams } from "react-router-dom";

const Diary = () => {

    const {id} = useParams(); //@PathVariable String id와 유사

    return (
        <div>
            <div>{id}번 일기</div>
            <h2>Diary 페이지 입니다</h2>
        </div>
    )
}

export default Diary;