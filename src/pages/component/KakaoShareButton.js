import React from "react";
const {Kakao} = window;

const KakaoShareButton = ({data}) =>{
  const url = 'https://bejewelled-platypus-3a3fd8.netlify.app/'
  //배포된 사이트 주소
  const reaultUrl = window.location.href;
  React.useEffect(()=>{
    Kakao.cleanup()
    Kakao.init("6a02ae0ce383262c8411b86feb03eb87")
  },[])
const shareKakao = () =>{
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '나에게 맞는 인테리어 스타일은?',
      description: `당신과 어울리는 스타일은 "${data.name}" 입니다.`,
      imageUrl: url + data.image,
      link: {
        mobileWebUrl: reaultUrl,
        webUrl: reaultUrl,
      },
    },
    buttons: [
      {
        title: '나도 테스트 하러가기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
}
  return(<button onClick={shareKakao}>카카오톡 공유하기</button>)
}

export default KakaoShareButton