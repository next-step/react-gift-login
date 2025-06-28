import { Layout } from '@/Components/layout/Layout'
import CategorySection from '@/Components/CategorySection'
import GiftFriendsSection from '@/Components/GiftFriendsSection'
import KakaocampCheerSection from '@/Components/KakaocampCheerSection'
import RankingSection from '@/Components/RankingSection'
import { useTheme } from '@emotion/react'

const Home = () => {
  const theme = useTheme()
  console.log('오류:', theme)
  // ...
  return (
    <Layout>
      <GiftFriendsSection />
      <CategorySection />
      <KakaocampCheerSection />
      <RankingSection />
    </Layout>
  )
}

export default Home