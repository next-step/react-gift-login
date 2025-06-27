import GlobalStyle from '@/styles/GlobalStyle';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import FeaturedGifts from '@/components/FeaturedGifts';
import SupportBanner from '@/components/SupportBanner';
import LiveRanking from '@/components/LiveRanking';
import Footer from '@/components/Footer';
import { Container } from '@/styles/Container';

function App() {
  return (
    <>
      <Container>
        <GlobalStyle />

        <Header />
        <Hero />
        <CategoryList />
        <FeaturedGifts />
        <SupportBanner />
        <LiveRanking />
        <Footer />
      </Container>
    </>
  );
}

export default App;
