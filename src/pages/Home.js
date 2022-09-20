    import React from "react";
    import { useNavigate } from "react-router-dom";
    import Header from "./component/Header";
    import './assets/Style.scss';

function Home() {
    const navigate = useNavigate()
    const handleClickButton = ()=>{
      //useHistory
      navigate('/Home')
  }
  return (
    <div className= "MainBG">
      <Header />,
        <div className= "MainWrapper">
          <h3>
          니집내집
          </h3>
            <div className="MainText">
                당신을 위한 인테리어 플랫폼
            </div>
            <div className="buttonA">
              <button className="btn homebtn" type="button" onClick={handleClickButton}>
                테스트 시작하기
              </button>
            </div>
            <div className="buttonB">
              <button className="btn homebtn" type="button" onClick={handleClickButton}>
                커뮤니티
              </button>
            </div>
        </div>
    </div>

  );
}

export default Home;



