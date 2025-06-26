import { Global, ThemeProvider } from '@emotion/react'
import { resetStyle } from '@/styles/reset'
import theme from './styles/theme'
import { MainLayout } from './components/MainLayout'
import Header from './components/Header'
import Category from './components/Category'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <MainLayout>
        <Header />
        <Category />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App;