import { useRouter } from 'next/router'
import styled from 'styled-components'
import Input from '../Input/Index'
import Button from '../Button/Index'

export default function FormWrapper(props) {

  const router = useRouter()

  return (
    <form
      autoComplete="off"
      onSubmit={event => {
      event.preventDefault()
      router.push(`/quiz?name=${props.name}`)
    }}>

      <Input setName={props.setName} />

      <Button
        text="Vamos jogar!"
        disabled={props.name.length === 0}
        textIfDisabled="Primeiro, digite seu nome..." />

    </form>
  )
}