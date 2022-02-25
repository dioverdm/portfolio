import { createGlobalStyle } from 'styled-components';
import Theme from '../constant/uiTheme';

const { blackIntense, white, redCherry } = Theme;

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
    color: ${white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  /* scroll */
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${blackIntense};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${redCherry};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${Theme.withe};
  }
  /* scroll */

  .space-lateral {
    padding: 0 24px;

    @media screen and (min-width:1220px) {
      padding: 0;
    }
  }
`;

export default GlobalStyles;
