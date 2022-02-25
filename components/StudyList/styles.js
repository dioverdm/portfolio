import styled from 'styled-components';
import Theme from '../../constant/uiTheme';

const { redCherry, white } = Theme;

export const Section = styled.section`
  margin: 0 0 32px;

  @media screen and (min-width:790px) {
    padding: 0 16px;
  }
`;

export const BodyDisapprove = styled.section`

`;

export const Title = styled.h3`
  color: ${redCherry};
  margin: 0 0 16px;
`;

export const Body = styled.p`
  margin: 0 0 5px;
  font-weight: 700;

  &:hover Strong,
  &:hover {
    color: ${redCherry};
  }
`;

export const Strong = styled.span`
  font-weight: 700;
  color: ${white};
`;
