import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial Rounded MT Bold', monospace;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    align-items: center;
  }
`;
