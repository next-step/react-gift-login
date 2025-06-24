/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      /* reset */
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
        font-family: 'Pretendard', sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
      }

      ul,
      ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyles;