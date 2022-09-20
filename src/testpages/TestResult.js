import React from 'react';
import './Test.css'
import { ResultData } from '../asset/data/resultdata'
import { useNavigate, useSearchParams } from 'react-router-dom'

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
    <div className='testmain'>
      <h2>나에게 맞는 인테리어 스타일은?</h2>
      <h3>당신과 어울리는 스타일은 {resultData.name} 입니다.</h3>
      <p>{resultData.desc}</p>
      <button onClick={()=>navigate('/')}>테스트 다시하기</button>
    </div>
  )
}

export default TestResult;