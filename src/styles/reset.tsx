import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export default function Reset() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        body {
          font-family: Arial, sans-serif;
          background-color: #fff;
        }
      `}
    />
  );
}