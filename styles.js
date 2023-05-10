import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial Rounded MT Bold', monospace;
    color: #2B0B00;
    background-color: #F9F6E6;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    min-height: 120vh;
  }
`;
