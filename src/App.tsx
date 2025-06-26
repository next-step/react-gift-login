import { Global, useTheme } from '@emotion/react'
import { globalStyle } from '@/styles/GlobalStyle'

import TopNavigationBar from '@/component/TopNavigationBar'
import GiftRecipientList from '@/component/GiftRecipientList'
import CategorySection from '@/component/CategorySection'
import CommentSection from './component/CommentSection'
import TrendingGiftRanking from './component/TrendingGiftRanking'

const App: React.FC = () => {
  const theme = useTheme()
  return (
    <>
      <Global styles={globalStyle(theme)} />
      <TopNavigationBar />
      <GiftRecipientList />
      <CategorySection />
      <CommentSection />
      <TrendingGiftRanking />
    </>
  )
}

export default App
