import { ThemeProvider } from 'styled-components'
import React from 'react'
import QuizScreen from '../../src/screens/Quiz/index'

export default function QuizDaGaleraPage(props) {
  return (
    <ThemeProvider theme={props.dbExternal.theme}>
      <QuizScreen externalQuestions={props.dbExternal.questions} externalBg={props.dbExternal.bg} />
      {/* <pre style={{ color: 'black', }}>
        {JSON.stringify(props.dbExternal.questions, null, 4)}
      </pre> */}
    </ThemeProvider>
  )
}

export async function getServerSideProps(context) {
  // console.log('Infos que o Next dá para nós:', context.query.id)

  const [ projectName, githubUser ] = context.query.id.split('___')

  try {
    const dbExternal = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Falha em pegar os dados')
      })
      .then((response) => response)
  
    return {
      props: {
        dbExternal,
      },
    }
  } catch(error) {
    // Tratar erro
    throw new Error(error)
  }
}