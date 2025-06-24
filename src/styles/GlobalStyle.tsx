/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
const GlobalStyle = () => (
  <Global
    styles={css`
      /* reset css */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Pretendard', sans-serif;
        line-height: 1.5;
        background-color: #fff;
        color: #000;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ul,
      ol {
        list-style: none;
      }
    `}
  />
);

export default GlobalStyle;
