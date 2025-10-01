import "./Editor.css"

// props initData -> 입력창 또는 수정창에서 다르게 보여질 입력 내용
// 수정창 -> 기존에 입력한 내용
// onSubmit -> 버튼 클릭시 실행되는 이벤트 핸들러 함수
const Editor = ({initData, onSubmit}) => {
    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                {/* 날짜 입력창 */}
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                {/* 이미지 선택창 */}
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                {/* 일기 입력 창 */}
            </div>
            <div className="editor_section">
                {/* 작성완료, 취소 버튼 */}
            </div>
        </div>
    );
};

export default Editor;