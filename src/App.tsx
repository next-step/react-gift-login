import { Navbar } from '@/components/Navbar'
import { CategorySection } from '@/components/CategorySection'
import { ProductListSection } from '@/components/ProductListSection'
import { Layout } from '@/components/Layout'

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <CategorySection />
        <ProductListSection />
      </Layout>
    </>
  )
}

export default App
