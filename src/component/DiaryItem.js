import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../Util";
import "./DiaryItem.css"
import Button from "./Button";
import React from "react";

const DiaryItem = ({id, emotionId, content, date}) => {

    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className="DiaryItem">
            <div onClick={goDetail} className={["img_section", `img_section_${emotionId}`].join(" ")}>
                <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
            </div>

            <div className="info_section" onClick={goDetail}>
                <div className="date_wrapper">
                    {new Date(date).toLocaleDateString()}
                </div>

                <div className="content_wrapper">
                    {content.slice(0,25)}
                    {/* 25자까지 출력 제한 */}
                </div>
            </div>
            
            <div className="button_section">
                <Button text={"수정하기"} onClick={goEdit}/>
            </div>
        </div>
    );
}

export default React.memo(DiaryItem);