import styled from 'styled-components'
import db from '../../../db.json'

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px 5px;
  font-weight: bold;
  border: 1px solid ${db.theme.colors.blue};
  border-radius: 3px;
  outline: none;
  color: ${db.theme.colors.white};
  background-color: ${db.theme.colors.blue};
  transition: .3s;

  &:focus,
  &:hover {
    background-color: ${db.theme.colors.lightBlue};
  }

  &:disabled {
    border: 1px solid ${db.theme.colors.gray};
    color: ${db.theme.colors.white};
    background-color: ${db.theme.colors.gray};
  }
`

export default function ButtonWrapper(props) {

  let vazio = props.pretext ? props.name.length === 0 : false

  return (
    <Button type="submit" disabled={vazio}>
      { vazio ? "Preencha seu nome" : props.text }
    </Button>
  )
}