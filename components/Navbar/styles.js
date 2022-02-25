import styled from 'styled-components';
import Theme from '../../constant/uiTheme'

export const Nav = styled.div`
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  padding: 10px 0;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin: auto;

  @media screen and (min-width:1220px) {
    width: 1200px;
  }
`;

export const Logo = styled.a`
  font-size: 2.2rem;
  font-weight: 800;
  transition-duration: 1s;

  &:hover {
    color: ${Theme.redCherry};
    transition-duration: 1s;
  }
`;

export const Menu = styled.div`
  position: relative;
  height: 60px;
  width: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width:790px) {
    width: auto;
  }
`;

export const Burger = styled.span`
  display: inline-block;
  height: 25px;
  width: 25px;
  background: url('../public/icons/Hamburger-icon.svg') center/contain no-repeat;
  transition-duration: 1s;

  &:hover {
    background: url('../public/icons/Hamburger-red-icon.svg') center/contain
      no-repeat;
    transition-duration: 1s;
  }

  @media screen and (min-width:790px) {
    display: none;
  }
`;

export const Links = styled.ul`
  list-style: none;
  display: none;
  padding: 30px 24px;
  position: absolute;
  top: 45px;
  right: -20px;
  text-align: end;
  gap: 8px;
  font-weight: 700;

  li a {
    transition-duration: 1s;
    &:hover {
      color: ${Theme.redCherry};
      text-decoration: underline;
    }
  }

  @media screen and (min-width:790px) {
    display: flex;
    flex-direction: row;
    position: initial;
    align-items: center;
    gap: 24px;
    padding: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 15px;
  border: 2px solid ${Theme.redCherry};
  border-radius: 30px;
  background-color: transparent;
  color: var(--withe);
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  transition-duration: 0.5s;

  &:hover {
    background-color: ${Theme.redCherry};
    text-decoration: none;
  }
`;
