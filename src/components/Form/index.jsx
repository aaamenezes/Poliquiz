import { useRouter } from 'next/router'
import styled from 'styled-components'
import db from '../../../db.json'

const FormWrapper = styled.form`
  input {
    display: block;
    width: 100%;
    padding: 10px 5px;
    margin-bottom: 15px;
    border: 1px solid ${db.theme.colors.white};
    border-radius: 3px;
    outline: none;
    color: ${db.theme.colors.white};
    background-color: transparent;
    transition: .3s;

    &:focus,
    &:hover {
      color: ${db.theme.colors.black};
      background-color: ${db.theme.colors.white};
    }
  }

  button {
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
  }
`

export default function Form(props) {

  const router = useRouter()

  return (
    <FormWrapper
      onSubmit={event => {
      event.preventDefault()
      router.push(`/quiz?name=${props.name}`)
    }}>
      
      <input
        text="text"
        placeholder="Insira seu nome"
        onChange={ event => props.setName(event.target.value) } />

      <button
        type="submit"
        disabled={props.name.length === 0} >
        Jogar
      </button>
    </FormWrapper>
  )
}