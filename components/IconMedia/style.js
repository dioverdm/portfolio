import styled from 'styled-components';

export const Icon = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  transition-duration: 0.5s;
  background: ${(props) => props.bg && `url(${props.bg})`};

  &:hover {
    transform: scale(0.9);
  }
`;
