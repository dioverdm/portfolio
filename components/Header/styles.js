import styled from 'styled-components';
import Theme from '../../constant/uiTheme';

const { blackIntense, white, gray, redCherry } = Theme;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${blackIntense};
  background-blend-mode: multiply;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 5rem;
  line-height: 4.6rem;
  color: ${white};
  font-weight: 800;
  width: 100%;
  text-align: center;

  &::before,
  &::after {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: ${gray};
  }

  &::before {
    content: '¡Hola! me llamo';
    margin: 0 0 16px;
  }

  &::after {
    content: 'Maquetador Web';
    margin: 16px 0 0;
  }

  @media screen and (min-width: 790px) {
    font-size: 7rem;
    line-height: 6.6rem;

    &::before,
    &::after {
      font-size: 2rem;
      line-height: 3rem;
    }

    &::before {
      text-align: start;
    }

    &::after {
      text-align: end;
    }
  }

  @media screen and (min-width: 1220px) {
    font-size: 10rem;
    line-height: 7.6rem;

    &::before,
    &::after {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
  }
`;

export const Arrow = styled.a`
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${redCherry};
  position: absolute;
  bottom: 50px;
  transition-duration: 0.5s;
  box-shadow: 0 0 30px -7px #f53b57;

  &:hover {
    transform: scale(1.3);
  }
`;

export const Container = styled.div`
  display: inline-block;
  height: 28px;
  width: 28px;
  background: url('/icons/down-arrow.webp') center/contain no-repeat;
`;
