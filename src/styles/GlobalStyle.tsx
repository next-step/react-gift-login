import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body,
      #root {
        height: 100%;
      }
      body {
        line-height: 1;
        -webkit-font-smoothing: antialiased;
      }
      ol,
      ul,
      menu {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote::before,
      blockquote::after,
      q::before,
      q::after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}
  />
);

export default GlobalStyle;