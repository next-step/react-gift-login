/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const NavBar = () => (
  <header
    css={css`
      position: sticky;
      top: 0;
      z-index: 10;
      background: #fff;
      display: flex;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #393434;
      font-weight: 700;
      justify-content: center;
    `}
  >
    선물하기
  </header>
);
