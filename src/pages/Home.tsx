import { Layout } from '@/Components/layout/Layout'
import CategorySection from '@/Components/CategorySection'
import GiftFriendsSection from '@/Components/GiftFriendsSection'
import KakaocampCheerSection from '@/Components/KakaocampCheerSection'

const Home = () => {
  return (
    <Layout>
      <GiftFriendsSection />
      <CategorySection />
      <KakaocampCheerSection />
    </Layout>
  )
}

export default Home
