/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

      html,
      body {
        font-family: 'Pretendard', sans-serif;
        background-color: #fff;
      }
    `}
  />
);

export default GlobalStyle;
