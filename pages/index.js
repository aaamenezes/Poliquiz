import { useState } from 'react'

import QuizBackground from '../src/components/QuizBackground'
import IndexHead from '../src/components/Head'
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
        <Widget>
          <Widget.Header>
            <h1>Quiz CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <Form name={name} setName={setName}/>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam architecto minus, dicta cum sit quasi ipsa aliquid voluptatibus itaque pariatur ea? Molestias ipsum architecto tempore eveniet impedit vel iste debitis!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="#" />
    </QuizBackground>
  );
}
