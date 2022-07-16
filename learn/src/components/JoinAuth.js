
//회원가입 추가정보기입페이지입니다.

const JoinAuth = () => {
    return(
        <>
            <div className="">
                <div className="nickname-box">
                    <label htmlFor="">닉네임</label>
                    <input type="text" value='' placeholder="닉네입을 입력하세요" />
                </div>

                <div className="age-list-box">
                    <label htmlFor="">연령대</label>
                    <ul>
                        <li>20대</li>
                        <li>30대</li>
                        <li>40대</li>
                        <li>기타</li>
                    </ul>
                </div>

                <div className="location-select-box">
                    <label htmlFor="">지역</label>
                    <select className="selectbox-korea-location" name="location" id="">
                        <option>지역구</option>
                        <option value="seoul">서울</option>
                        <option value="">경기도</option>
                        <option value="">충청도</option>
                    </select>
                </div>
                <div>
                    {/*button-컴포넌트 들어갈 예정입니다.*/}
                </div>
            </div>
        </>
    )
}

export default JoinAuth;