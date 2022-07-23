import styled from "styled-components";
import Theme from "../../constant/uiTheme";

const { blackIntense, white, redCherry } = Theme;

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

  @media screen and (min-width: 790px) {
    font-size: 7rem;
    line-height: 6.375rem;
  }

  @media screen and (min-width: 1220px) {
    font-size: 10rem;
    line-height: 9.375rem;
  }
`;

export const P = styled.p`
  margin: 8px 0 0;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-align: center;
  color: ${redCherry};

  @media screen and (min-width: 790px) {
    margin-right: 3px;
    font-size: 2rem;
    line-height: 1.9375rem;
    text-align: end;
  }

  @media screen and (min-width: 1220px) {
    font-size: 2.5rem;
    line-height: 2.4375rem;
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
  box-shadow: 0 0 10px 0 ${redCherry};
  animation: latidos 2s infinite;

  &:hover {
    transform: scale(1.3);
  }

  @keyframes latidos {
    from {
      transform: none;
    }
    50% {
      transform: scale(1.4);
      box-shadow: 0 0 18px 0 ${redCherry};
    }
    to {
      transform: none;
    }
  }
`;

export const Container = styled.div`
  display: inline-block;
  height: 28px;
  width: 28px;
  background: url("/icons/arrow-down.svg") center/contain no-repeat;
  background-size: 40px;
`;
