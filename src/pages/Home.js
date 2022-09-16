	import styled from 'styled-components';
    import React from "react";
    import { useNavigate } from "react-router-dom";
    import Header from "./component/Header";
    import HomeBgImg from "./assets/MainBg.jpg";

function Home() {
    const navigate = useNavigate()
  return (
    <MainBG>
      <Header />,
        <MainWrapper>
          <h3>
          니집내집
          </h3>
          <div>
            당신을 위한 인테리어 플랫폼
          </div>
        </MainWrapper>
    </MainBG>

  );
}

export default Home;



const MainBG = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${HomeBgImg});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  display: grid;
  place-items: center;
`

const MainWrapper = styled.div`
  position: absolute;
  min-height: 50vh;
  min-width: 100vw;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  margin: 0, 1rem;
  `
  const h3 = styled.div`
  font-size: 3rem;
  margin: 0, 1rem;
`