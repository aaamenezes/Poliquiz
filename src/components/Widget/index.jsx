import styled from 'styled-components'
import db from '../../../db.json'

const Widget = styled.div`
  margin: 24px 0;
  border: 1px solid ${db.theme.colors.black};
  background-color: ${db.theme.colors.black};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${db.theme.colors.blue};
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px;
   
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
`;

export default Widget;