import styled from 'styled-components'

import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'

import db from '../db.json'
import GitHubCorner from '../src/components/GithubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam architecto minus, dicta cum sit quasi ipsa aliquid voluptatibus itaque pariatur ea? Molestias ipsum architecto tempore eveniet impedit vel iste debitis!</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam architecto minus, dicta cum sit quasi ipsa aliquid voluptatibus itaque pariatur ea? Molestias ipsum architecto tempore eveniet impedit vel iste debitis!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="#" />
    </QuizBackground>
  )
}
