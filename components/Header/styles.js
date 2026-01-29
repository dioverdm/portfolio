import styled, { keyframes } from 'styled-components';
import Theme from '../../constant/uiTheme';

const { 
  primary, 
  primaryLight, 
  secondary, 
  accent, 
  textLight, 
  bgDark,
  bgLight,
  glassDark 
} = Theme;

// Animaciones
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const pulseGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px ${primary}40;
    opacity: 1;
  }
  50% { 
    box-shadow: 0 0 40px ${primary}80;
    opacity: 0.8;
  }
`;

const textReveal = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`;

const particleFloat = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  /* Gradiente animado de fondo */
  background: linear-gradient(
    135deg,
    ${bgDark} 0%,
    #111827 25%,
    #1e293b 50%,
    #111827 75%,
    ${bgDark} 100%
  );
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  
  /* Efecto de partículas en el fondo */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, ${primary}10 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${secondary}10 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${accent}10 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 800;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  animation: ${textReveal} 1.5s ease-out forwards;
  opacity: 0;
  animation-delay: 0.3s;
  
  /* Gradiente de texto con animación sutil */
  background: linear-gradient(
    135deg,
    ${primaryLight} 0%,
    ${primary} 25%,
    ${secondary} 50%,
    ${accent} 75%,
    ${primaryLight} 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 6s ease infinite, ${textReveal} 1.5s ease-out forwards;
  
  /* Efecto de brillo en el texto */
  text-shadow: 
    0 0 30px ${primary}40,
    0 0 60px ${primary}20;
  
  @media screen and (min-width: 790px) {
    font-size: 6rem;
    line-height: 5.5rem;
  }

  @media screen and (min-width: 1220px) {
    font-size: 8rem;
    line-height: 7.5rem;
  }
`;

export const H2 = styled.h2`
  margin: 20px 0 0;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.8s;
  
  /* Gradiente para el subtítulo */
  background: linear-gradient(135deg, ${secondary} 0%, ${accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Efecto de subrayado animado */
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${secondary}, transparent);
    animation: ${gradientShift} 3s ease infinite;
    border-radius: 2px;
  }
  
  @media screen and (min-width: 790px) {
    margin-right: 3px;
    font-size: 2.5rem;
    line-height: 2.2rem;
    text-align: end;
  }

  @media screen and (min-width: 1220px) {
    font-size: 3rem;
    line-height: 2.8rem;
  }
`;

export const Arrow = styled.a`
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: absolute;
  bottom: 80px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards, ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: 1.2s;
  
  /* Efecto glass con borde gradiente */
  background: ${glassDark};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 2px solid transparent;
  
  /* Borde gradiente animado */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      ${primary} 0%,
      ${secondary} 50%,
      ${accent} 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  /* Efecto de pulso */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${primary}20, ${accent}20);
    animation: ${pulseGlow} 2s ease-in-out infinite;
    z-index: -2;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 
      0 0 30px ${primary}80,
      0 0 60px ${primary}40;
    
    &::before {
      opacity: 1;
      animation: ${gradientShift} 2s linear infinite;
      background-size: 200% 200%;
    }
  }
`;

export const Container = styled.div`
  display: inline-block;
  height: 28px;
  width: 28px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/icons/double-arrow-down.svg') center/contain no-repeat;
    filter: invert(100%) brightness(200%);
  }
  
  /* Animación de rebote */
  animation: bounce 2s ease-in-out infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

// Componente para partículas flotantes
export const FloatingParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

export const Particle = styled.div`
  position: absolute;
  width: ${props => props.size || '2px'};
  height: ${props => props.size || '2px'};
  background: linear-gradient(135deg, ${primary}80, ${secondary}80);
  border-radius: 50%;
  top: ${props => props.top || '0%'};
  left: ${props => props.left || '0%'};
  animation: ${particleFloat} ${props => props.duration || '20s'} linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: inherit;
    filter: blur(5px);
    border-radius: 50%;
    opacity: 0.5;
  }
`;

export const GlowingOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${primary}10 0%, transparent 70%);
  filter: blur(40px);
  animation: ${floatAnimation} 6s ease-in-out infinite alternate;
  top: 20%;
  left: 10%;
  z-index: 1;
  
  &:nth-child(2) {
    background: radial-gradient(circle, ${secondary}10 0%, transparent 70%);
    top: 60%;
    left: 70%;
    animation-delay: -3s;
  }
`;

export const CodeTag = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 8px 16px;
  background: ${glassDark};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 1.2rem;
  color: ${primaryLight};
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 1.5s;
  
  &::before {
    content: '</>';
    margin-right: 8px;
    color: ${secondary};
  }
`;