// src/styles/global.tsx
import { Global, css } from '@emotion/react';
import 'pretendard/dist/web/variable/pretendardvariable.css';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body {
        font-family: 'Pretendard Variable', sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
