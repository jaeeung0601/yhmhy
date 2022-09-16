    import React from "react";
    import { useNavigate } from "react-router-dom";
    import Header from "./component/Header";
    import './assets/Style.css';

function Home() {
    const navigate = useNavigate()
  return (
    <p class= "MainBG">
      <Header />,
        <p class= "MainWrapper">
          <h3>
          니집내집
          </h3>
            <div class="MainText">
                당신을 위한 인테리어 플랫폼
            </div>
            <div>
              <button type="button" onclick="location.href='/'">
                테스트 시작하기
              </button>
            </div>
            <div>
              <button type="button" onclick="location.href='/'">
                글 작성
              </button>
            </div>
        </p>
    </p>

  );
}

export default Home;



