import "./Emotionltem.css"
import React from "react";

const Emotionltem = ({id, img, name, onClick, isSelected}) => {

    const handleOnClick = () => {
        onClick(id);
    }

    return (
        <div className={["EmotionItem", isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`].join(" ")} onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={img}></img>
            <span>{name}</span>
        </div>
    )
}

export default React.memo(Emotionltem);