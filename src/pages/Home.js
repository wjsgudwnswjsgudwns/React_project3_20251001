// import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Button from "../component/Button";
// import Editor from "../component/Editor";
import Header from "../component/Header";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../Util";
import DiaryList from "../component/DiaryList";

//Context 설정 됨 -> App에서 보내준 data,onCreate,onUpdate,onDelete 사용 가능
const Home = () => {

    const data = useContext(DiaryStateContext);
    //App에서 보내준 data

    const [filteredData,setFilteredData] = useState([]);

    // const [searchParams, setSearchParams] = useSearchParams();
    // console. log(searchParams.get("sort"));

    const [pivotDate,setPivotDate] = useState(new Date()); // 오늘 날짜 (기준 날짜)

    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1));
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()-1));
    };

    useEffect (() => {
        if(data.length >= 1) {
        const{beginTimeStamp,endTimeStamp} = getMonthRangeByDate(pivotDate);
        setFilteredData(
            data.filter(
                (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
            )
        )
        } else {
            setFilteredData([]);
        }
    },[data, pivotDate]);

    const onSubmit = () => {
        alert("작성 완료 버튼을 클릭했음");
    };

    return (
        <div>
            <Header title={headerTitle} 
                    leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                    rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={filteredData} />
        </div>
    )
}

export default Home;