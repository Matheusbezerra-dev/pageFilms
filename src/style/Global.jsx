import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    font-family: Helvetica;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
    
  a {
    text-decoration: none;
    color: rgb(255, 119, 5);
  }

  a:hover {
    color: rgb(255, 80, 5)
  }
`;

export default Global;
