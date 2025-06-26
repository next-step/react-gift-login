import Layout from '@/Layout'
import logo from '@/assets/logo.png'
import FriendSelector from '@/components/FriendSelector'
import CategorySection from '@/components/CategorySection'
import CampusBanner from '@/components/CampusBanner'

const friends = ['라이언', '무지', '콘']
function App() {
  return (
    <Layout logoSrc={logo}>
      <FriendSelector friends={friends} />
      <CategorySection />
      <CampusBanner />
    </Layout>
  )
}

export default App
