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
      'Pretendard',
      -apple-system,
      sans-serif;
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

function ResetStyles() {
  return <Global styles={reset} />;
}

export default ResetStyles;
