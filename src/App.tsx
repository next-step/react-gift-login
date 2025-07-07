import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { CategorySection } from '@/components/CategorySection';
import { ProductListSection } from '@/components/ProductListSection';
import { LoginPage } from '@/pages/LoginPage';
import RootLayout from '@/layout/RootLayout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout>
            <Navbar />
            <main>
              <CategorySection />
              <ProductListSection />
            </main>
          </RootLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
