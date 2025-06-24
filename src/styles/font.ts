import { css } from '@emotion/react'

// font 적용
export const fontStyles = css`
  /* 
  pretender 폰트 적용
  https://github.com/orioncactus/pretendard
  */

  /* reset.ts 에서 inherit 처리 되어 있어 명시를 위해 다음과 같이 구성 */
  html,
  body {
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  }
  *,
  *::before,
  *::after {
    font-family: inherit;
  }
`
