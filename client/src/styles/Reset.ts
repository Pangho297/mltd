import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Reset = createGlobalStyle`
  ${reset}

  input {
    margin: 0px;
    padding: 0px;
  }
`;

export default Reset;
