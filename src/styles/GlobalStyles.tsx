/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

import { theme } from './theme';

export const GlobalStyles = () => (
  <Global
    styles={css`
      /* Reset */
      *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
      html, body, #root { width:100%; height:100%; background: ${theme.colors.background}; }
      body { font-family: 'Pretendard', sans-serif; color: ${theme.colors.text}; }
      a { text-decoration:none; color:inherit; }
      /* Container */
      #root > div { max-width: 720px; margin: 0 auto; }
    `}
  />
);
