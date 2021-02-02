import styled from 'styled-components'
import db from '../../../db.json'

const QuizBackground = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: 
    linear-gradient(
      ${db.theme.colors.black}BB,
      ${db.theme.colors.black}BB
    ),
    url( ${({ backgroundImage }) => backgroundImage} );
  background-size: cover;
  background-position: top;
  animation-name: moveBackground;
  animation-duration: 40s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  @keyframes moveBackground {
    from { background-position: top; }
    to { background-position: bottom; }
  }
`

export default QuizBackground
