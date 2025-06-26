import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          project init
        </div>
      </ThemeProvider>
    </>

  )
}

export default App
