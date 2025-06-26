<<<<<<< step2
import GlobalStyle from '@/styles/GlobalStyle';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import FeaturedGifts from '@/components/FeaturedGifts';
import SupportBanner from '@/components/SupportBanner';
import LiveRanking from '@/components/LiveRanking';
import Footer from '@/components/Footer';
import { Container } from '@/styles/Container';

=======
import Logo from '@/assets/logo.png';
>>>>>>> readytodiv
function App() {
  return (
<<<<<<< step2
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
=======

      <>
      <GlobalStyle />
      <div>
        <h2>불필요한 코드 삭제 후 App 화면</h2>
        <h2>Complete!</h2>
        <img src={Logo} alt="로고" width={100} />
      </div>
>>>>>>> readytodiv
    </>
  );
}

export default App;
