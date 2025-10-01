// import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";

const Home = () => {

    // const [searchParams, setSearchParams] = useSearchParams();
    // console. log(searchParams.get("sort"));

    const onSubmit = () => {
        alert("작성 완료 버튼을 클릭했음");
    }

    return (
        <div>
            <Header title={"Home"} 
                    leftChild={<Button type={"positive"} text={"긍정버튼"} onClick={() => {alert("positive");}}/>}
                    rightChild={<Button type={"negative"} text={"부정버튼"} onClick={() => {alert("negative");}}/>}
            />
            <Editor initData={{
                date : new Date().getTime(),
                emotionId : 1,
                content : "이전에 작성 했던 일기"
            }} onSubmit={onSubmit}/>
        </div>
    )
}

export default Home;