import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme }   from '@/styles/theme'; 
import { ThemeProvider } from '@emotion/react';
import App from './App.tsx'
import GlobalStyle from '@/styles/GlobalStyle';
import RootLayout from '@/layout/RootLayout';
import 'material-icons/iconfont/material-icons.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}> {/* 테마 컨텍스트 주입 */}
      <GlobalStyle />             {/* Reset + Pretendard 전역 적용 */}
      <RootLayout>                {/* max-width를 720px으로 제한, 중앙 정렬 */}
        <App />
      </RootLayout>
    </ThemeProvider>
  </StrictMode>,
)