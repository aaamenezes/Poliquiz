import styled from 'styled-components'
import db from '../../../db.json'

const Widget = styled.div`
  border: none;
  background-color: ${db.theme.colors.black};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    /* font-size: 16px; */
    font-weight: 700;
    line-height: 1.5;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background-color: ${db.theme.colors.blue};
`

Widget.Content = styled.div`
  padding: 24px 32px 32px;

  h2 {
    font-style: italic;
    margin-bottom: 20px;

    &::before {
      content: '"...';
    }

    &::after {
      content: '..."';
    }
  }
   
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

Widget.Image = styled.div`
  padding: 0;
`

Widget.Topic = styled.a`
  display: block;
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: ${db.theme.borderRadius};
  outline: 0;
  text-decoration: none;
  color: ${db.theme.colors.white};
  background-color: ${db.theme.colors.darkgray};
  cursor: pointer;
  transition: ${db.theme.transition};

  &:hover,
  &:focus {
    background-color: ${db.theme.colors.darkBlue};
  }

  &[data-selected=true] {
    background-color: ${db.theme.colors.lightBlue};
  }

  &[data-reveal-correct=true] {
    background-color: ${db.theme.colors.success};
  }

  &[data-reveal-correct=false] {
    background-color: ${db.theme.colors.wrong};
  }
`

export default Widget
