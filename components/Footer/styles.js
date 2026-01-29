import styled from 'styled-components';
import Theme from '../../constant/uiTheme';

const { 
  primary, 
  secondary, 
  accent, 
  textLight, 
  bgDark,
  primaryLight,
  glassDark 
} = Theme;

export const FooterStyled = styled.footer`
  background: linear-gradient(135deg, 
    ${bgDark} 0%, 
    rgba(15, 15, 15, 0.95) 100%
  );
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  padding: 40px 0 20px;
  color: ${textLight};
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${primary}40, 
      ${secondary}40, 
      ${accent}40, 
      transparent
    );
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 70% 30%,
      ${primary}05 0%,
      transparent 50%
    );
    animation: float 20s ease-in-out infinite alternate;
    z-index: 0;
  }
`;

export const Content = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  
  @media screen and (min-width: 790px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1220px) {
    width: 1200px;
    margin: 0 auto;
  }
  
  p {
    font-size: 1.5rem;
    opacity: 0.9;
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
    
    b {
      background: linear-gradient(135deg, ${primary} 0%, ${secondary} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, ${primary}, ${secondary});
        transition: width 0.3s ease;
      }
      
      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  
  @media screen and (min-width: 790px) {
    margin-top: 0;
    gap: 30px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  
  @media screen and (min-width: 790px) {
    margin-top: 0;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${glassDark};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${textLight};
  font-size: 1.8rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${primary}20, ${secondary}20);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    color: ${primaryLight};
    border-color: ${primary}50;
    box-shadow: 
      0 10px 20px rgba(0, 0, 0, 0.3),
      0 0 20px ${primary}20;
    
    &::before {
      opacity: 1;
    }
  }
  
  svg {
    position: relative;
    z-index: 1;
  }
`;

export const FooterLink = styled.a`
  color: ${textLight};
  font-size: 1.4rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, ${primary}, ${secondary});
    transition: width 0.3s ease;
  }
  
  &:hover {
    opacity: 1;
    color: ${primaryLight};
    
    &::after {
      width: 100%;
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  font-size: 1.2rem;
  opacity: 0.7;
  
  @media screen and (min-width: 790px) {
    margin-top: 40px;
  }
`;

export const HeartIcon = styled.span`
  color: ${accent};
  display: inline-block;
  animation: pulse 1.5s ease-in-out infinite;
  margin: 0 5px;
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
      color: ${primary};
    }
  }
`;