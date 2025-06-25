import { useState } from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import styled from '@emotion/styled'

const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  width: 700px;
  height: 100vh;
  margin: 0 auto;
`
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>

      </Main>
    </ThemeProvider>
    </>
  )
}

export default App
