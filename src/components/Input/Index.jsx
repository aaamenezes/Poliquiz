import styled from 'styled-components'
import db from '../../../db.json'

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 15px;
  border: 1px solid ${db.theme.colors.white};
  border-radius: 3px;
  outline: none;
  font-weight: bold;
  color: ${db.theme.colors.white};
  background-color: transparent;
  transition: ${db.theme.transition};

  &:focus,
  &:hover {
    color: ${db.theme.colors.black};
    background-color: ${db.theme.colors.white};
  }
`

export default function InputWrappe(props) {
  return (
    <Input
      type="text"
      name="Nome do usuário"
      placeholder="Insira seu nome para jogar..."
      onChange={ event => props.setName(event.target.value) }/>
  )
}