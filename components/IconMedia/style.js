import styled from 'styled-components';

export const Icon = styled.a`
  display: inline-block;
  height: 24px;
  width: 24px;
  transition-duration: 0.5s;
  background: ${(props) => props.bg && `url('${props.bg}')`} center/contain
    no-repeat;

  &:hover {
    transform: scale(0.9);
  }

  @media screen and (min-width: 1220px) {
    height: 30px;
    width: 30px;
  }
`;
