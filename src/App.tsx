import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/GlobalStyle'
import TopNavigationBar from '@/component/TopNavigationBar'
import GiftRecipient from '@/component/GiftRecipient'
import GiftCategory from '@/component/GiftCategory'
import EtceteraSection from '@/component/EtceteraSection'
import TrendingGiftRanking from '@/component/TrendingGiftRanking'

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <TopNavigationBar />
      <GiftRecipient />
      <GiftCategory />
      <EtceteraSection />
      <TrendingGiftRanking />
    </>
  )
}

export default App
