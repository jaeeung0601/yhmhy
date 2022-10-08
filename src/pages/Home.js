    import React from "react";
    import { useNavigate } from "react-router-dom";
    import Header from "./component/Header";
    import './assets/Style.scss';

    import { Scrollbar, A11y, Autoplay } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/react';  
    import 'swiper/scss';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';
    import img1 from'../pages/assets/HomeImg/img1.jpg';
    import img2 from'../pages/assets/HomeImg/img3.jpg';
    import img3 from'../pages/assets/HomeImg/img2.jpg';

function Home() {
    const navigate = useNavigate()
    const handleClickButton = ()=>{
      //useHistory
      navigate('/TestHome')
  }
  const handleClickButtonCM = ()=>{
    //useHistory
    navigate('/Community')
}
  const handleClickButtonMkt = ()=>{
    //useHistory
   navigate('/MktCommunity')
}
  return (
    <div>
      <Header />
        <Swiper
        modules={[Scrollbar, A11y, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 3000 }}	// 추가
        speed={1000}
        >
          <SwiperSlide>
          <img className="HomeImg" src={img1} />
          </SwiperSlide>
          <SwiperSlide>
          <img className="HomeImg" src={img2} />
          </SwiperSlide>
          <SwiperSlide>
          <img className="HomeImg" src={img3} />
          </SwiperSlide>

        </Swiper>
      <div className="HomeContainer" >
        <div className='NameContainer'>
          니집내집
        </div>
        <div className='TextContainer'>
            "당신을 위한 인테리어 플렛폼"  
        </div>
        <div className='BtnContainer'>
        <button className="AbsoluteBtn HomeBtn1" type="button" onClick={handleClickButton}>
          커뮤니티
        </button>
        <button className="AbsoluteBtn HomeBtn2" type="button" onClick={handleClickButtonCM}>
          테스트 <br />시작하기
        </button>
        <button className="AbsoluteBtn HomeBtn3" type="button" onClick={handleClickButtonMkt}>
          마켓
        </button>
        </div>
      </div>
    </div>

  );
}

export default Home;



