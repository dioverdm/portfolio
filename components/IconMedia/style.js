import styled from "styled-components";

export const Icon = styled.a`
  height: 24px;
  width: 24px;
  transition-duration: 0.5s;
  background: ${props => props.bg ?  `url(${props.bg})` : '#fff'};
  &:hover {
    transform: scale(0.9);
  }
`;
