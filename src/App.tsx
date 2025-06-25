import { Global } from '@emotion/react'
import { globalReset } from '@/styles/reset'
import { ThemeProvider } from '@emotion/react'
import { Layout } from '@/components/Layout'
import { theme } from '@/styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalReset} />
      <Layout>
        <h1>홈페이지 입니다.</h1>
      </Layout>
    </ThemeProvider>
  )
}
export default App 