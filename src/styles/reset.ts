import { css } from '@emotion/react';

export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
    color: #000;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  textarea {
    font: inherit;
    background: none;
    border: none;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }
`;
