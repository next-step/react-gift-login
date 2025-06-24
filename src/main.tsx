import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { css, Global } from '@emotion/react'
import { resetStyles } from './styles/reset.ts'
import { fontStyles } from './styles/font.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Global 스타일 적용 */}
    <Global
      styles={css`
        ${resetStyles}
        ${fontStyles}
      `}
    />
    {/* App 컴포넌트 렌더링 */}
    <App />
  </StrictMode>,
)
