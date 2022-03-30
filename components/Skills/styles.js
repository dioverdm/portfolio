import styled from 'styled-components';
import Theme from '../../constant/uiTheme';

const { withe } = Theme;

export const SkillsStyles = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media screen and (min-width: 790px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Body = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Img = styled.img`
  height: 20px;
  width: 20px;
`;

export const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: ${withe};
  }
`;
