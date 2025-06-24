import { css } from '@emotion/react';
import reset from 'styled-reset';

export const resetStyle = css`
  ${reset as any}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #fff;
    color: #222;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
