import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Theme from '../constant/uiTheme';

const Nav = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Efecto glass inicial */
  background: ${Theme.glassDark};
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  &.scrolled {
    top: 10px;
    width: 95%;
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    /* Efecto liquid glass */
    background: linear-gradient(
      135deg,
      rgba(20, 20, 20, 0.85) 0%,
      rgba(30, 30, 30, 0.9) 100%
    );
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
    }
  }
`;

const Logo = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${Theme.primary} 0%, ${Theme.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${Theme.primary}, ${Theme.secondary});
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  
  a {
    padding: 0.5rem 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, ${Theme.primary}, ${Theme.accent});
      transition: width 0.3s ease;
      border-radius: 2px;
    }
    
    &:hover::before {
      width: 100%;
    }
    
    &:hover {
      color: ${Theme.primaryLight};
    }
  }
`;

const NavButton = styled.button`
  background: linear-gradient(135deg, ${Theme.primary} 0%, ${Theme.secondary} 100%);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 120, 255, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${Theme.textLight};
  font-size: 2.4rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav className={isScrolled ? 'scrolled' : ''}>
      <Logo>DioverDM</Logo>
      
      <NavLinks>
        <NavLink><a href="#home">Home</a></NavLink>
        <NavLink><a href="#about">About</a></NavLink>
        <NavLink><a href="#projects">Projects</a></NavLink>
        <NavLink><a href="#contact">Contact</a></NavLink>
        <NavButton>Get in touch</NavButton>
      </NavLinks>
      
      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </MobileMenuButton>
    </Nav>
  );
};

export default Navbar;