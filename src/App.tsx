import GlobalStyle from '@/styles/GlobalStyle'
import Header from '@/components/Header'
import FriendSelector from '@/components/FriendSelector'
import CategoryList from '@/components/CategoryList'
import NoticeBanner from '@/components/NoticeBanner'
import RankingTabs from '@/components/RankingTabs'
import ProductGrid from '@/components/ProductGrid'
import LoadMoreButton from '@/components/LoadMoreButton'

function App() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto' , alignItems: 'center'}}>
      <GlobalStyle />
      <Header />
      <FriendSelector />
      <CategoryList />
      <NoticeBanner />
      <RankingTabs />
      <ProductGrid />
      <LoadMoreButton />
    </div>
  )
}

export default App

