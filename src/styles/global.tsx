/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'
import reset from './reset'

const GlobalStyle = () => (
    <Global
        styles={css`
      ${reset}
    `}
    />
)

export default GlobalStyle
