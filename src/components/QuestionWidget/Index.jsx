import { useState } from 'react'

import Widget from '../../components/Widget'
import Button from '../../components/Button/Index'
import Radio from '../Radio/Index'
import BackLinkArrow from '../BackLinkArrow/Index'
import Success from '../Success/Index'
import Wrong from '../Wrong/Index'

export default function QuestionWidget(props) {

  const [ selectedAlternative, setSelectedAlternative ] = useState(undefined)
  const [ isQuestionSubmited, setIsQuestionSubmited ] = useState(false)
  const questionId = `question${props.questionIndex}`
  const isCorrect = selectedAlternative === props.question.answer

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>Pergunta {props.questionIndex + 1} de {props.totalQuestions}</h3>
      </Widget.Header>

      <Widget.Image>
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
          src={props.question.image} />
      </Widget.Image>

      <Widget.Content>

        <p>Quem disse essa frase?</p>
        <h2>{props.question.title}</h2>
        <p>{props.question.description}</p>

        <form onSubmit={event => {
          event.preventDefault()
          setIsQuestionSubmited(true)
          props.addResult(isCorrect)
          setTimeout(() => {
            setSelectedAlternative(undefined)
            props.onSubmit()
            setIsQuestionSubmited(false)
          }, 3000);
        }}>

          {props.question.alternatives.map((alternative, index) => {

            return (
              <Widget.Topic
                key={index}
                as="label"
                data-selected={selectedAlternative === index ? true : false}
                data-reveal-correct={
                  isQuestionSubmited ?
                  (index === props.question.answer ? true : false) :
                  ""
                } >
                <Radio
                  questionId={questionId}
                  setSelectedAlternative={setSelectedAlternative}
                  index={index} />
                {alternative}
              </Widget.Topic>
            )
          })}

          {/* <pre>
          {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button
            text={
              selectedAlternative === undefined ?
              "Marque alguma alternativa" :
              "Enviar"
            }
            disabled={selectedAlternative === undefined}
            textIfDisabled="Marque alguma alternativa. Ou chute." />
        </form>

        {isQuestionSubmited && isCorrect && <Success /> }
        {isQuestionSubmited && !isCorrect && <Wrong /> }
      </Widget.Content>
    </Widget>
  )
}