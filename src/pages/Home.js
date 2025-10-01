import { useSearchParams } from "react-router-dom";

const Home = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console. log(searchParams.get("sort"));

    return (
        <div>
            <h2>Home 페이지 입니다.</h2>
        </div>
    )
}

export default Home;