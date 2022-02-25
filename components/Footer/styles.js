import styled from 'styled-components';
import Theme from '../../constant/uiTheme';

const { white, blackIntense, redCherry } = Theme;

export const FooterStyled = styled.footer`
  background-color: ${white};
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  padding: 20px 0;
  color: ${blackIntense};
`;

export const Content = styled.section`
  @media screen and (min-width: 790px) {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  @media screen and (min-width: 1220px) {
    width: 1200px;
    margin: auto;
    padding: 0;
  }
`;

export const Strong = styled.span`
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${redCherry};
    text-decoration: underline;
    transition-duration: 1s;
  }
`;
