import styled from "styled-components";
import Theme from "../../constant/uiTheme";

const { blackIntense, white, gray, redCherry } = Theme;

export const Header = styled.header`
  position: relative;
  height: 100vh;
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

  &::before {
    content: '¡Hola! me llamo';
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.5rem;  
    color: ${gray};
    margin: 0 0 5px;
  }

  &::after {
    content: 'Frontend Developer';
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: ${redCherry};
    margin: 5px 0 0;
  }

  @media screen and (min-width:790px) {
    font-size: 7rem;
    line-height: 6.6rem;

    &::before,
    &::after {
      font-size: 2rem;
      line-height: 3rem;
    }

    &::before {
      text-align: start
    }

    &::after {
      text-align: end    
    }
  }

  @media screen and (min-width:1220px) {
    font-size: 10rem;
    line-height: 7.6rem;

    &::before,
    &::after {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
  }
`;

export const Container = styled.div`
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${redCherry};
  position: absolute;
  bottom: 50px;
`;

export const Arrow  = styled.a`
  display: inline-block;
  height: 28px;
  width: 28px;
  background: url('/icons/down-arrow.svg') center/contain no-repeat;
`;