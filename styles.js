import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial Rounded MT Bold', monospace;
    color: #2B0B00;
    background: rgb(246,197,100);
    background: linear-gradient(0deg, rgba(246,197,100,1) 0%, rgba(249,246,230,1) 74%);
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
    min-height: 980px;

    @media (min-height: 900px) {
      min-height: 1000px;
    }
  }

  #__next {
    max-width: 450px;
    width: 90vw;
  }

  a {
    text-decoration: none;
  }
`;
