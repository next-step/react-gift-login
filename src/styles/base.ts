import { css } from '@emotion/react'
import { theme } from './theme'

// global base css 설정
export const baseStyles = css`
  body {
    /* 배경색 설정 */
    background-color: ${theme.colors.gray.gray100};
  }
`
