import React from 'react';
import './Test.css'
import './Button.css'
import testmain from '../asset/interior/test_main.jpg'
import { useNavigate } from 'react-router-dom'

const Test = () =>{
  const navigate = useNavigate()
  const handleClickButton = () =>{
    navigate('/testquestion')
  }
  return (
    <div className='testmain'>
      <h1>당신을 위한 인테리어 스타일 추천</h1>
      <h2>나에게 맞는 인테리어 스타일은?</h2>
      <img src={testmain} width={350} height={350} alt='test main img'/>
      <h3>MBTI를 기반으로한 나와 잘맞는 스타일 찾기</h3>
      <button className='custom-btn' onClick={handleClickButton}><span>테스트 시작하기</span></button>
    </div>
  )
}

export default Test;