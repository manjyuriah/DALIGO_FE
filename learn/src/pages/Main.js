//total header - title
import "../assets/css/main.scss";
const Main = () => {
  return (
    <>
      <section className="mainTop">
        <header className="mainHeader">
          <h1>LOGO</h1>
          <div className="notice">notice</div>
        </header>
        <nav className="mainNav">
          <div className="nickName">야근요정</div>
          <div className="mainBtns">
            <button>시험 치러 가기</button>
            <button>학원 찾으러 가기</button>
          </div>
        </nav>
      </section>
      <section className="mainBody">
        <div className="testBox">
          <div>시험정보 / 공지사항</div>
          <div>시험문제 안내</div>
          <div>기능 및 도로주행 시험 대비</div>
        </div>
      </section>
      <section className="mainCommunity">
        <p className="driveManner">초보자가 꼭 기억해야 할 운전 매너란?</p>
        <div className="communityBox">
          <h3>커뮤니티</h3>
          <div className="communityContent">
            <div className="contentTop">
              <div>이런저런일</div>
              <button>더보기 &gt;</button>
            </div>
            <ul className="bannerDisc">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="pickBox">
          <div className="siteInform">
            <div>#Pick</div>
            <p>우리동네 운전 연습하기 좋은 곳 없을까?</p>
            <span>#서울근교 #울산 #부산 #광주</span>
          </div>
          <div className="siteImage">
            <img alt="운전연습 장소"></img>
          </div>
        </div>
      </section>
      <footer>
        <div className="footerBox">
          <button>소식</button>
          <button>시험</button>
          <button>홈</button>
          <button>위치안내</button>
          <button>내정보</button>
        </div>
      </footer>
    </>
  );
};
export default Main;
