import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { CategorySection } from '@/components/CategorySection'
import { ProductListSection } from '@/components/ProductListSection'
import { LoginPage } from '@/pages/LoginPage'
import { Layout } from '@/components/Layout'

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
    </Routes>
  )
}

export default App
