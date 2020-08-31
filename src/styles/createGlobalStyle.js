import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 12px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Special Elite', cursive;
    background-color: var(--background);
    color: var(--text);
  }

  button, input {
    outline: 0;
    font-family: 'Special Elite', cursive;
  }

  p {
    font-size: 1.6rem;
  }

  small {
    font-size: 1.2rem;
  }

  .container {
  margin: 0 auto;
  max-width: 1000px;
  padding: 40px;

    .title {
      font-size: 4.4rem;
      text-align: center;
    }
  }

  .icon {
    position: fixed;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  :root {
    ${({theme}) => {
      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      })
      return append;
    }}
  }

`;