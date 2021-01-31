import styled from 'styled-components'
import db from '../../../db.json'

const Wrong = styled.p`
  padding: 10px 15px;
  border-radius: ${db.theme.borderRadius};
  font-weight: bold;
  text-align: center;
  background-color: ${db.theme.colors.wrong};
`

export default function WrongWrapper() {
  return (
    <Wrong>Você errou</Wrong>
  )
}