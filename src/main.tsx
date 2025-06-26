import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import GlobalStyle from '@/styles/GlobalStyle'
import App from '@/App.tsx'
import { theme } from '@/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>          
  </StrictMode>,
)
