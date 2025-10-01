import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

export const getEmotionImgById = (emotionId) => {

    const targetEmotionId = String(emotionId);

    switch (targetEmotionId) {
        case "1":
            return emotion1;
        case "2":
            return emotion2;
        case "3":
            return emotion3;
        case "4":
            return emotion4;
        case "5":
            return emotion5;
        default:
            return null;
    }
};

export const getFormattedDate = (targetDate) => { // yyyy-MM-dd 로 포맷 변경
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10) { // 10보다 작으면 앞에 0을 붙여라
        month = `0${month}`; // ex) 7 -> 07
    }

    if(date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
};