import "./DiaryList.css"
import Button from "./Button"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
        {value : "latest" , name : "최신순"},
        {value : "oldest" , name : "오래된 순"},
    ];

const DiaryList = ({data}) => { // data -> Home에서 넘어온 props -> 월별로 필터링된 일기들의 배열

    const [sortType,setSortType] = useState("latest");
    const [sortedData,setSortedData] = useState([]); // 정렬한 결과가 저장될 일기 배열

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const navigate = useNavigate();
    const onClickNew = () => {
        navigate("/new");
    };

    useEffect(() => {
        const compare = (a , b) => { // a -> 일기 객체 1 , b -> 일기 객체 2
            if(sortType === "latest") { // 내림차순(최신순)
                return Number(b.date) - Number(a.date);
            } else { // oldest 오름차순(오래된 순)
                return Number(a.date) - Number(b.date);
            }
        };
        // data.sort(compare); // 원본 순서가 변경됨
        const copyList = JSON.parse(JSON.stringify(data)); // 깊은 복사 (메모리에 새로 만들어져서 참조함)
        copyList.sort(compare);
        setSortedData(copyList);
    },[data, sortType]);

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <select onChange={onChangeSortType} value={sortType}>
                        {sortOptionList.map((item, idx) => (
                            <option key={idx} value={item.value}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="right_col">
                    <Button type={"positive"} text={"새 일기 쓰기"} onClick={onClickNew}></Button>
                </div>
            </div>

            <div className="list_wrapper">
                {sortedData.map((item) => (
                    <DiaryItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

export default DiaryList;