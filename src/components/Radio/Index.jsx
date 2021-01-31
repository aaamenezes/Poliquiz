export default function Radio(props) {
  return (
    <input
      type="radio"
      name={props.questionId}
      style={{ display: 'none' }}
      onChange={ () => props.setSelectedAlternative(props.index)} />
  )
}