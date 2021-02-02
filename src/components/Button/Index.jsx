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
  transition: ${db.theme.transition};
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${db.theme.colors.darkBlue};
  }

  &:disabled {
    border: 1px solid ${db.theme.colors.gray};
    color: ${db.theme.colors.white};
    background-color: ${db.theme.colors.gray};
    cursor: not-allowed;
  }
`

export default function ButtonWrapper(props) {

  const noText = props.disabled

  return (
    <Button type="submit" disabled={noText} >
      { noText ? props.textIfDisabled : props.text }
    </Button>
  )
}