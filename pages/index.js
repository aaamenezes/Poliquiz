import { useState } from 'react'
import { motion } from 'framer-motion'

import QuizBackground from '../src/components/QuizBackground'
import IndexHead from '../src/components/Head'
import QuizLogo from '../src/components/QuizLogo/Index'
import QuizContainer from '../src/components/QuizContainer/Index'
import Widget from '../src/components/Widget'
import Form from '../src/components/Form'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'

import db from '../db.json'

export default function Home() {

  const [ name, setName ] = useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <IndexHead />
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' }
          }}
          initial="hidden"
          animate="show" >
          <Widget.Header>
            <h1>POLIQUIZ</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos sobre política brasileira.</p>
            <p>Descubra quem disse essa frases icônicas.</p>
            <Form name={name} setName={setName}/>
          </Widget.Content>
        </Widget>
        {/* <Widget
          as={motion.section}
          transition={{ delay: .5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' }
          }}
          initial="hidden"
          animate="show" >
          <Widget.Header>
            <h2>Quizes da galera</h2>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map(quizUrl => {

                let [ projectName, githubUser ] = quizUrl
                  .replace('https://', '')
                  .replace('.verce.app/', '')
                  .split('.')

                return (
                  <li key={quizUrl}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}>

                      {`Projeto: ${projectName}, feito por ${githubUser}`}

                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget> */}
        <Footer
          as={motion.footer}
          transition={{ delay: .5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' }
          }}
          initial="hidden"
          animate="show" />
      </QuizContainer>
      <GithubCorner projectUrl="#" />
    </QuizBackground>
  );
}
