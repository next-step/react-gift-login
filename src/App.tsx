import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { theme as emotionTheme } from '@/styles/Theme'
import GlobalStyle from '@/styles/GlobalStyle'
import Home from '@/pages/Home'

const muiTheme = createTheme() // 필요시 커스텀 가능

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
        <GlobalStyle />
        <Home />
      </EmotionThemeProvider>
    </MuiThemeProvider>
  )
}

export default App