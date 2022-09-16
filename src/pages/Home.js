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
          <ul class="multi-layout">
            <li>
              <button type="button" onclick="location.href='/'">
                인테리어 테스트
              </button>
              <button type="button" onclick="location.href='/'">
                글 작성
              </button>
            </li>
            <li>
                <div>
                당신을 위한 인테리어 플랫폼
                </div>
            </li>
          </ul>
        </p>
    </p>

  );
}

export default Home;



