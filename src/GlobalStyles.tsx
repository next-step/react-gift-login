import { css, Global } from '@emotion/react';
import useCustomTheme from './useCustomTheme';
const GlobalStyles = () => {
  const theme =useCustomTheme();
  return( 
    <Global
      styles={css`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          height: 100%;
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          background-color: ${theme.colors.semantic.backgroundDefault};
          color: ${theme.colors.semantic.textDefault};
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ul, ol {
          list-style: none;
        }

        button {
          background: grey;
          border: none;
          cursor: pointer;
          font: inherit;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      `}
    />
  )
};

export default GlobalStyles;
