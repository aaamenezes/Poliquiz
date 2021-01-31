import Widget from '../Widget'

export default function ResultWidget(props) {

  // const acertos = props.points.reduce((currentSum, currentResult) => {
  //   let isAcerto = currentResult === true
  //   return isAcerto ? currentSum + 1 : currentSum
  // }, 0)

  const acertos = props.points.filter(answer => answer).length

  return (
    <Widget>
      <Widget.Header>
        <h1>Parabéns!!!</h1>
      </Widget.Header>
      <Widget.Content>
        <p>Você acertou {acertos} {acertos === 1 ? "pergunta" : "perguntas"}</p>
        <ul>
          {props.points.map((result, index) => (
            <li key={index}>
              #{
                (index+1).toString().length === 1 ?
                `0${index+1}` :
                index+1
              } Resultado: {result === true ? "Acertou" : "Errou"}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  )
}