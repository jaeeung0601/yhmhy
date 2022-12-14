import React from 'react';
import styled from 'styled-components'
import './Test.scss'
import './Button.css'
import Header from '../component/Header'
import { ResultData } from '../assets/data/resultdata'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import KakaoShareButton from '../component/KakaoShareButton'

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
    <div>
      <Header />
    <div className='testresult'>
      <h2>나에게 맞는 인테리어 스타일은?</h2>
      <h3>당신과 어울리는 스타일은 "{resultData.name}" 입니다.</h3>
      <img src={resultData.image} width={500} height={350} style={{marginTop:20}} alt='result img' />
      <p style={{marginTop:20, width:500}}>{resultData.desc}</p>
      <ButtonGroup style={{fontFamily: 'assddfont'}}>
        <Button style={{fontFamily: 'assddfont'}} onClick={()=>navigate('/testhome')}>테스트 다시하기</Button>
        <KakaoShareButton data={resultData} />
      </ButtonGroup>
    </div>
    </div>
  )
}

export default TestResult;

const ButtonGroup = styled.div`
  margin-top: 30px;
`