
//total header - title(페이지당 반복되는 헤더입니다.)

import { Link } from "react-router-dom";

const header = () => {
    return(
     <>
        <section className="header-wrap">
            <Link to='/'></Link>
            <title className="page-title-name"></title>
            <Link to='/'></Link>
        </section>
     </>   
    )
}
export default header;