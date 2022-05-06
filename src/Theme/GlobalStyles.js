import { createGlobalStyle } from "styled-components";

import HKGroteskRegular from "./fonts/HKGrotesk-Regular.woff";
import HKGroteskBold from "./fonts/HKGrotesk-Bold.woff";
import HKGroteskSemiBold from "./fonts/HKGrotesk-SemiBold.woff";

import { theme } from "./index";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: HKGrotesk;
      src: local('HKGrotesk'), local('HKGrotesk'),
      url(${HKGroteskRegular}) format('woff');
  }

  @font-face {
    font-family: HKGrotesk;
      src: local('HKGrotesk'), local('HKGrotesk'),
      url(${HKGroteskSemiBold}) format('woff');
      font-weight: 700;
  }

  @font-face {
    font-family: HKGrotesk;
      src: local('HKGrotesk'), local('HKGrotesk'),
      url(${HKGroteskBold}) format('woff');
      font-weight: 800;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-weight: 400;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .goldenHeading {
    color: ${theme.colors.goldDark.default}
  }
`;

export default GlobalStyles;
