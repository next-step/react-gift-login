/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      body {
        font-family: 'Pretendard', sans-serif;
      }
    `}
  />
)

export default GlobalStyle
