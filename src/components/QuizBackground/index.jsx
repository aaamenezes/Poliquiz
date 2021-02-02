import styled from 'styled-components'
import db from '../../../db.json'

const QuizBackground = styled.div`
  width: 100vw;
  background-image: url( ${({ backgroundImage }) => backgroundImage} )
`

export default QuizBackground
