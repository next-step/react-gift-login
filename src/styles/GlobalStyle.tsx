/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        height: 100%;
        font-family: 'Pretendard', sans-serif;
      }
    `}
  />
)

export default GlobalStyle;
