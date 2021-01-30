import QuizBackground from '../src/components/QuizBackground'
import IndexHead from '../src/components/Head'
import QuizContainer from '../src/components/QuizContainer/Index'
import Widget from '../src/components/Widget'

import db from '../db.json'
import Button from '../src/components/Button/Index'

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio do loading]
      </Widget.Content>
    </Widget>
  )
}

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <IndexHead />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h3>Pergunta 1 de {db.questions.length}</h3>
          </Widget.Header>

          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '140px',
              objectFit: 'cover',
            }}
            src="https://placehold.it/400" />

          <Widget.Content>
            <h2>Título da Pergunta</h2>
            <p>Descrição da Pergunta</p>
            <Button pretext={false} text="Enviar">
              Enviar
            </Button>
          </Widget.Content>
        </Widget>

        <LoadingWidget />

      </QuizContainer>
    </QuizBackground>
  )
}
