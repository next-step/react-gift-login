import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar/Navbar'
import { CategorySection } from '@/components/Category/CategorySection'
import { ProductListSection } from '@/components/Product/ProductListSection'
import { LoginPage } from '@/pages/LoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { Layout } from '@/components/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Navbar />
            <CategorySection />
            <ProductListSection />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
