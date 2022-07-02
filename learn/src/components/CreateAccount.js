//사용자 계정만들기 컴포넌트입니다.
import { Link } from "react-router-dom";

const CreateAccount = () => {
    return(
        <>
        <section className="create-account__Wrapper">
            <div className="account-inner">
                <div className="title-image">intro-image</div>
                <div className="sns-account-load-btns">
                    <button type="button" value="">
                        <i>naver-잇콘</i>
                        네이버로 시작하기
                    </button>
                    <button type="button" value="">
                        <i>kakao-잇콘</i>
                        카카오로 시작하기
                    </button>
                    <button type="button" value="">
                        <i>google-잇콘</i>
                        구글로 시작하기
                    </button>
                </div>
                <div className="ect-load-btns">
                    <Link to="/">이메일로 시작하기</Link>
                    <Link to="/">회원이신가요?</Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default CreateAccount;