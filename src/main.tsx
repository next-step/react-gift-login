import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle';
import { theme }   from '@/styles/theme'; 
import RootLayout from '@/layout/RootLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}> {/* 테마 컨텍스트 주입 */}
      <GlobalStyle />             {/* Reset + Pretendard 전역 적용 */}
      <RootLayout>
        <App />
      </RootLayout>
    </ThemeProvider>
  </StrictMode>,
)