import styled from 'styled-components'
import db from '../../../db.json'

const Success = styled.p`
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: ${db.theme.borderRadius};
  font-weight: bold;
  text-align: center;
  background-color: ${db.theme.colors.success};
`

export default function SuccessWrapper() {
  return (
    <Success>Você acertou</Success>
  )
} Success