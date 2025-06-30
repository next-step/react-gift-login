import { Global, ThemeProvider } from '@emotion/react'
import { resetStyle } from '@/styles/reset'
import theme from '../styles/theme'
import { MainLayout } from '../components/MainLayout'
import Header from '../components/Header'
import Category from '../components/Category'
import Friends from '../components/Friends'
import Banner from '../components/Banner'
import TimeRanking from '../components/TimeRanking'

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <MainLayout>
        <Header />
        <Friends />
        <Category />
        <Banner />
        <TimeRanking />
      </MainLayout>
    </ThemeProvider>
  )
}

export default HomePage;