import { useState, useEffect } from 'react'
import QuizBackground from '../../src/components/QuizBackground'
import IndexHead from '../../src/components/Head'
import QuizContainer from '../../src/components/QuizContainer/Index'
import QuestionWidget from '../../src/components/QuestionWidget/Index'
import LoadingWidget from '../../src/components/LoadingWidget/Index'
import ResultWidget from '../../src/components/Result/Index'

import db from '../../db.json'

const screenStates = {
  quiz: 'quiz',
  loading: 'loading',
  result: 'result'
}

export default function QuizPage() {

  const [ currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [ screenState, setScreenState ] = useState(screenStates.loading)
  const [ points, setPoints ] = useState([])
  const question = db.questions[currentQuestionIndex]
  const totalQuestions = db.questions.length

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
    <QuizBackground backgroundImage={db.bg}>
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
