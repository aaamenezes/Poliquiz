import styled from 'styled-components'

const Radio = styled.input`
  display: none;
`

export default function RadioWrapper(props) {

  return (
    <Radio
      type="radio"
      name={props.questionId}
      onChange={ () => props.setSelectedAlternative(props.index)} />
  )
}