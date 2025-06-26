import { Global, ThemeProvider } from '@emotion/react'
import { globalReset } from '@/styles/reset'
import { theme } from '@/styles/theme'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import styled from '@emotion/styled'

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalReset} />
      <AppWrapper>
        <Layout>
          <Navbar />
          <main>
            <h1>컨텐츠 영역</h1>
          </main>
        </Layout>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
