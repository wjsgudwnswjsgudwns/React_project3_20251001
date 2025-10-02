import "./DiaryList.css"
import Button from "./Button"
import { useState } from "react";

const sortOptionList = [
        {value : "latest" , name : "최신순"},
        {value : "oldest" , name : "오래된 순"},
    ];

const DiaryList = ({data}) => { // data -> Home에서 넘어온 props -> 월별로 필터링된 일기들의 배열

    const [sortType,setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

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
                    <Button type={"positive"} text={"새 일기 쓰기"}></Button>
                </div>
            </div>
        </div>
    );
}

export default DiaryList;