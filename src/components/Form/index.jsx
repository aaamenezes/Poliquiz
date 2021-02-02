import { useRouter } from 'next/router'
import styled from 'styled-components'
import Input from '../Input/Index'
import Button from '../Button/Index'

const Form = styled.form`
  display: block;
`

export default function FormWrapper(props) {

  const router = useRouter()

  return (
    <Form
      autoComplete="off"
      onSubmit={event => {
      event.preventDefault()
      router.push(`/quiz?name=${props.name}`)
    }}>

      <Input setName={props.setName} />
      <Button
        name={props.name}
        pretext={true}
        text="Vamos jogar!"
        disable={props.name === 0} />

    </Form>
  )
}