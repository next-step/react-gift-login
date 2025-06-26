<<<<<<< step2
import { Global, css } from '@emotion/react';

const GlobalStyle = () => 
=======
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
>>>>>>> readytodiv
  <Global
    styles={css`
      // reset css 역할
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        font-family: 'Pretendard', sans-serif;
        background-color: #fff;
<<<<<<< step2
        color:rgb(192, 48, 236);
=======
        color: #9631ac;
>>>>>>> readytodiv
        line-height: 2;
      }
      h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    `}
<<<<<<< step2
  />

export default GlobalStyle;

=======
  />
>>>>>>> readytodiv
