import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { reset } from '@styles/reset.ts'
import { Global } from '@emotion/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={reset} />
    <App />
  </StrictMode>,
)
