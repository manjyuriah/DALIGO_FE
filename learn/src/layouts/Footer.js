import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer>
                <div className="footer-inner-line">
                    <h2>footer입니다.</h2>
                    <ul className="footer-col-list">
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>저작권정책</li>
                        <li>공지사항</li>
                    </ul>
                    
                    <article>
                        <p>Copyright Since 2022 , Project LEARN app All right reserved.<br>현 저작권은 어플 제작자에게 있음을 알려드립니다.</br></p>
                    </article>
                    <span className="footer-logo"></span>
                </div>
            </footer>
        </>
    )
}
export default Footer;