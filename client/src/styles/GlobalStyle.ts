import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
  font-family: 'NEXON Lv2 Gothic';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  outline: none;
  font-family: 'NEXON Lv2 Gothic';
}

`;

export default GlobalStyle;
