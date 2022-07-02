//total header - title
import "../assets/css/main.scss";

//test file load
const Main = () => {
  return (
    <>
    <section className="main__Wrapper">
      <section className="main-Wrap-position">
        <div className="main-title-inner">

          <header className="main-header">
            <i className="main-logo"></i>
            <div className="notice">notice</div>
          </header>

          <div className="main-navi">
            <h2 className="user-nickname">야근요정</h2>
            <div className="main-header-buttons">
              <button className="load-testpage-btn" type="button">시험 치기</button>
              <button className="find-academy-btn" type="button">학원 찾기</button>
            </div>
          </div>

          <div className="index-body">
            <div className="main-title-inner">
              <div className="testBox">
                <div></div>
                <div></div>
              </div>
              <div className="prepareTest">기능 및 도로주행 시험 대비</div>
            </div>
          </div>

        </div>
      </section>
      
      <section className="main-community">
        <div className="community-inner-box">
          <p className="main-banner-sec">초보자가 꼭 기억해야 할 운전 매너란?</p>
          <div className="community-box">
            <h2>커뮤니티</h2>
            <div className="community-content">
              <div className="content-top">
                <div>이런저런일</div>
                <button>더보기 &gt;</button>
              </div>
              <ul className="driver-news">
                <li>
                  <div class="news-img" alt="news-img"></div>
                  <div className="news-title">
                    이 정도면 최고 난이도 시험 아니냐?!{" "}
                  </div>
                </li>
                <li></li>
                <li></li>
              </ul>
              <ul className="banner-disc">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pick-box">
        <div className="main-inner">
          <div className="info-drive-common">
            <div>#Pick</div>
            <p>우리동네 운전 연습하기 좋은 곳 없을까?</p>
            <p>#서울근교 #울산 #부산 #광주</p>
          </div>
          <div className="site-image">
            <img alt="운전연습 장소"></img>
          </div>
        </div>
      </section>

      <footer>
        <div className="main-inner">
          <div className="footer-box">
          {/*상단에 하단네비게이션 입니다.- no-footer -*/}
            <button>소식</button>
            <button>시험</button>
            <button>홈</button>
            <button>위치안내</button>
            <button>내정보</button>
          </div>
        </div>
      </footer>
    </section>
    </>
  );
};
export default Main;
