import styled from 'styled-components'

import db from '../../../db.json'

const LoadingBar = styled.div`
  height: 3px;
  background-color: ${db.theme.colors.lightBlue};
  animation-name: loading;
  animation-duration: 10s;
  animation-timing-function: linear;

  @keyframes loading {
    to { width: 100%; }
    from { width: 0; }
  }
`

const Explanation = styled.p`
  line-height: 1.5;
`

const ExplanationWrapper = props => {
  return (
    <React.Fragment>
      <Explanation>{props.description}</Explanation>
      <LoadingBar />
    </React.Fragment>
  )
}

export default ExplanationWrapper