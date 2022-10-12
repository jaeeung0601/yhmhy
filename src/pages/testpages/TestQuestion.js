import React from 'react';
import './Test.scss'
import './Button.css'
import Header from '../component/Header'
import { QuestionData } from '../assets/data/questionData'
import { createSearchParams, useNavigate } from 'react-router-dom'

const TestQuestion = () =>{
  const [questionNo, setQuestionNo] = React.useState(0)
  const [totalScore, setTotalScore] = React.useState([
    {id:'EI', score:0},
    {id:'SN', score:0},
    {id:'TF', score:0},
    {id:'JP', score:0}
  ])
  const navigate = useNavigate()

  const handClickButton = (no,type)=>{
    const newScore = totalScore.map((s)=>
      s.id === type ? {id:s.id, score:s.score + no} : s
    )
    setTotalScore(newScore)
    //다음 문제로 문제수 증가
    if (QuestionData.length !== questionNo + 1){
      setQuestionNo(questionNo+1)
    }else{
      //mbti 도출
      const mbti = newScore.reduce(
        (acc,curr)=>
        acc + (curr.score >= 2 ? curr.id.substring(0,1):curr.id.substring(1,2)),
        ''
      )
      console.log('mbti',mbti)
      navigate({
        pathname: '/testresult',
        search: `?${createSearchParams({
          mbti: mbti
        })}`
      })
    } 
  }
  return (
    <div className='testQuestionMain'>
      <Header />
      <div className='questionitem'>
        <h1>{QuestionData[questionNo].title}</h1>
        <img src={QuestionData[questionNo].image} width={500} height={350} alt='question img'/>
          <button onClick={()=>handClickButton(1, QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</button>
          <button onClick={()=>handClickButton(0, QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</button>
      </div>
    </div>
  )
}

export default TestQuestion;