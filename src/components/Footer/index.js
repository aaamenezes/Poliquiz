import styled from 'styled-components'
import db from '../../../db.json'

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 4px; 
  background-color: #00000070;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${db.theme.colors.white};
    text-decoration: none;
    transition: .3s;

    &:hover,
    &:focus {
      opacity: .5;
    }

    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}