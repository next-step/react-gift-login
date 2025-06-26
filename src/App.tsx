import { Global, ThemeProvider } from '@emotion/react'
import { resetStyle } from '@/styles/reset'
import theme from './styles/theme'
import { MainLayout } from './components/MainLayout'
import Header from './components/Header'
import Category from './components/Category'
//import Friends from './components/Friends'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <MainLayout>
        <Header />
        {/* <Friends /> */}
        <Category />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App;