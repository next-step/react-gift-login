import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Reset from './styles/reset.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reset />
    <App />
  </StrictMode>,
)
