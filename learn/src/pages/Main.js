//total header - title
import "../assets/css/main.scss";
const Main = () => {
  return (
    <>
      <section className="mainTop">
        <div className="mainInner">
          <header className="mainHeader">
            <h1>LOGO</h1>
            <div className="notice">notice</div>
          </header>
          <nav className="mainNav">
            <div className="nickName">야근요정</div>
            <div className="mainBtns">
              <button>시험 치기</button>
              <button>학원 찾기</button>
            </div>
          </nav>
        </div>
      </section>
      <section className="mainBody">
        <div className="mainInner">
          <div className="testBox">
            <div></div>
            <div></div>
          </div>
          <div className="prepareTest">기능 및 도로주행 시험 대비</div>
        </div>
      </section>
      <section className="mainCommunity">
        <div className="mainInner">
          <p className="driveManner">초보자가 꼭 기억해야 할 운전 매너란?</p>
          <div className="communityBox">
            <h2>커뮤니티</h2>
            <div className="communityContent">
              <div className="contentTop">
                <div>이런저런일</div>
                <button>더보기 &gt;</button>
              </div>
              <ul className="driverNews">
                <li>
                  <div class="newsImg" alt="newsImg"></div>
                  <div className="newsTitle">
                    이 정도면 최고 난이도 시험 아니냐?!{" "}
                  </div>
                </li>
                <li></li>
                <li></li>
              </ul>
              <ul className="bannerDisc">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pickBox">
        <div className="mainInner">
          <div className="siteInform">
            <div>#Pick</div>
            <p>우리동네 운전 연습하기 좋은 곳 없을까?</p>
            <p>#서울근교 #울산 #부산 #광주</p>
          </div>
          <div className="siteImage">
            <img alt="운전연습 장소"></img>
          </div>
        </div>
      </section>
      <footer>
        <div className="mainInner">
          <div className="footerBox">
            <button>소식</button>
            <button>시험</button>
            <button>홈</button>
            <button>위치안내</button>
            <button>내정보</button>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Main;
