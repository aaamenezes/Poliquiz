import { useState, useEffect } from 'react'
import QuizBackground from '../../components/QuizBackground'
import IndexHead from '../../components/Head'
import QuizContainer from '../../components/QuizContainer/Index'
import QuestionWidget from '../../components/QuestionWidget/Index'
import LoadingWidget from '../../components/LoadingWidget/Index'
import ResultWidget from '../../components/Result/Index'

// import db from '../../../db.json'

const screenStates = {
  quiz: 'quiz',
  loading: 'loading',
  result: 'result'
}

export default function QuizPage(props) {

  const [ currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [ screenState, setScreenState ] = useState(screenStates.loading)
  const [ points, setPoints ] = useState([])
  const question = props.externalQuestions[currentQuestionIndex]
  const totalQuestions = props.externalQuestions.length

  function addResult(point)  {
    setPoints([ ...points, point ])
  }

  useEffect(() => {
    // fetch() de mentira
    setTimeout(() => {
      setScreenState(screenStates.quiz)
    }, 700);
  }, [] )

  const handleSubmitQuiz = () => {
    const nextQuestion = currentQuestionIndex + 1
    if (nextQuestion < totalQuestions) {
      setCurrentQuestionIndex(nextQuestion)
    } else {
      setScreenState(screenStates.result)
    }
  }

  return (
    <QuizBackground backgroundImage={props.externalBg}>
      <IndexHead />
      <QuizContainer>

        {screenState === screenStates.quiz && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={currentQuestionIndex}
            onSubmit={handleSubmitQuiz}
            addResult={addResult} />
        )}

        {screenState === screenStates.loading && <LoadingWidget />}

        {screenState === screenStates.result && <ResultWidget points={points}/> }

      </QuizContainer>
    </QuizBackground>
  )
}
