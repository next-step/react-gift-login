import { Global, css } from '@emotion/react';

const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    background-color: #fff;
    color: #000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const ResetStyles = () => <Global styles={reset} />;

export default ResetStyles;
