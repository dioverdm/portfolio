import { createGlobalStyle } from 'styled-components';
import Theme from '../constant/uiTheme';

const { 
  primary, 
  secondary, 
  accent, 
  bgDark, 
  textLight, 
  glassDark,
  primaryLight 
} = Theme;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
    color: ${textLight};
    background-color: ${bgDark};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  li {
    list-style: none;
  }

  /* Modern scroll */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(180deg, ${bgDark} 0%, #1a1a1a 100%);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${primary} 0%, ${secondary} 100%);
    border-radius: 6px;
    border: 2px solid ${bgDark};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, ${primaryLight} 0%, ${accent} 100%);
  }

// En GlobalStyles.js, dentro de createGlobalStyle
@keyframes float-footer {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
  /* scroll */

  /* Clases de utilidad */
  .space-lateral {
    padding: 0 12px;

    @media screen and (min-width:790px) {
      padding: 0 24px;
    }

    @media screen and (min-width:1250px) {
      padding: 0;
    }
  }

  /* Animaciones globales */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(0, 120, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(0, 120, 255, 0.6);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  /* Efecto glass morphism */
  .glass-effect {
    background: ${glassDark};
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Gradient text */
  .gradient-text {
    background: linear-gradient(135deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Gradient border */
  .gradient-border {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 12px;
      padding: 2px;
      background: linear-gradient(135deg, ${primary}, ${secondary}, ${accent});
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }

  /* Hover effects */
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  }

  .hover-shine {
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        to right,
        transparent 20%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 80%
      );
      transform: rotate(30deg);
      transition: transform 0.6s;
    }
    &:hover::after {
      transform: rotate(30deg) translate(20px, 20px);
    }
  }
`;