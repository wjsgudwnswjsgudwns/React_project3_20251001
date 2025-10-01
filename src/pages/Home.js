// import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";

const Home = () => {

    // const [searchParams, setSearchParams] = useSearchParams();
    // console. log(searchParams.get("sort"));

    return (
        <div>
            <h2>Home 페이지 입니다.</h2>
            <Button type={"positive"} text={"긍정버튼"} onClick={() => {alert("positive");}}/>
            <Button type={"negative"} text={"부정버튼"} onClick={() => {alert("negative");}}/>
            <Button text={"기본버튼"} onClick={() => {alert("default");}}/>       
        </div>
    )
}

export default Home;