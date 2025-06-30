import { Navbar } from '@/components/Navbar';
import { CategorySection } from '@/components/CategorySection';
import { ProductListSection } from '@/components/ProductListSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <CategorySection />
        <ProductListSection />
      </main>
    </>
  );
}

export default App;
