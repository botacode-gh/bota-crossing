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
    background: rgb(246,197,100);
    background: linear-gradient(0deg, rgba(246,197,100,1) 0%, rgba(249,246,230,1) 69%);
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    min-height: 977px;
  }
`;
