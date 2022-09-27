import React from 'react';
import './Test.css'
import { ResultData } from '../asset/data/resultdata'
import { useNavigate, useSearchParams } from 'react-router-dom'
import KakaoShareButton from '../Component/KakaoShareButton'

const TestResult = () =>{
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get('mbti')
  const [resultData, setResultData] = React.useState({})

  React.useEffect(()=>{
    const result = ResultData.find((s)=>s.best === mbti)
    setResultData(result)
  },[mbti])
  return (
    <div className='testresult'>
      <h2>나에게 맞는 인테리어 스타일은?</h2>
      <h3>당신과 어울리는 스타일은 "{resultData.name}" 입니다.</h3>
      <img src={resultData.image} width={500} height={350} style={{marginTop:20}} alt='result img' />
      <p style={{marginTop:20}}>{resultData.desc}</p>
        <button onClick={()=>navigate('/')}>테스트 다시하기</button>
        <KakaoShareButton data={resultData} />
    </div>
  )
}

export default TestResult;