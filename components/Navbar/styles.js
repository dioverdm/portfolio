import styled from 'styled-components';
import Theme from '../../constant/uiTheme';

const { white, redCherry } = Theme;

export const Nav = styled.section`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: ${({ blurActive }) => (blurActive ? 'none' : 'blur(20px)')};
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  padding: 10px 0;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 70px;
`;

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin: auto;

  @media screen and (min-width: 1220px) {
    width: 1200px;
  }
`;

export const Logo = styled.a`
  font-size: 2.2rem;
  font-weight: 800;
  transition-duration: 0.5s;
  padding-bottom: 5px;
  color: ${({ activeTap, tapTitle }) => activeTap === tapTitle && redCherry};

  &:hover {
    color: ${redCherry};
  }
`;

export const Bar = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${white};
  transition: 0.5s;
  ${({ transformOne }) =>
    transformOne && 'transform: rotate(-45deg) translate(-8px, 6px)'};
  ${({ opacityBar }) => opacityBar && 'opacity:0'};

  ${({ transformTwo }) =>
    transformTwo && 'transform: rotate(45deg) translate(-8px, -8px)'};
`;

export const Burger = styled.div`
  height: 25px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1;

  &:hover ${Bar} {
    background-color: ${redCherry};
  }

  @media screen and (min-width: 790px) {
    display: none;
  }
`;

export const Links = styled.ul`
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 30px;
  list-style: none;
  display: ${({ showIcon }) => (showIcon ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  text-align: center;
  padding: 24px;
  position: absolute;
  font-weight: 700;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  font-size: 4rem;

  @media screen and (min-width: 790px) {
    display: flex;
    flex-direction: row;
    position: initial;
    align-items: center;
    gap: 24px;
    padding: 0;
    font-size: 1.5rem;
    background: none;
    backdrop-filter: none;
    box-shadow: none;
    height: 100%;
  }
`;

export const Tap = styled.span`
  transition-duration: 0.5s;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
  cursor: pointer;
  color: ${({ activeTap, tapTitle }) => activeTap === tapTitle && redCherry};
  border-bottom: ${({ activeTap, tapTitle }) =>
    activeTap === tapTitle && ` 2px solid ${redCherry}`};

  &:hover {
    color: ${redCherry};
    border-bottom: 2px solid ${redCherry};
  }

  &:nth-child(3) {
    border: none;
  }
`;

export const Button = styled.button`
  padding: 8px 24px;
  border: 2px solid ${redCherry};
  border-radius: 30px;
  background-color: transparent;
  color: ${white};
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  transition-duration: 0.5s;
  cursor: pointer;

  @media screen and (min-width: 790px) {
    font-size: 1.5rem;
    padding: 8px 16px;
  }

  &:hover {
    background-color: ${redCherry};
    text-decoration: none;
  }
`;
