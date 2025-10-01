import "./Button.css"

// Button 컴포넌트는 props -> 버튼 이름 text, 이벤트 핸들러 onClick
const Button = ({text, type, onClick}) => {

    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    //positive ->
    //  button의 클래스 이름 -> Button Button_positive

    return (
        <button className={["Button", `Button_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>

    );
};

export default Button;