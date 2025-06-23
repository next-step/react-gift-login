/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body {
        font-family: 'Pretendard', sans-serif;
        background-color: #fff;
      }
    `}
  />
);

export default GlobalStyle;
