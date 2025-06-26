
import { Global, css } from '@emotion/react'
import reset from './reset'

export const globalStyles = css`
  ${reset};

  body {
    background: #fff;
    font-family: sans-serif;
    color: #222;
  }

  #root {
    max-width: 720px;
    margin: 0 auto;
    padding: 1rem;
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;
