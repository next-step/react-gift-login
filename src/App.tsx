import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled from '@emotion/styled'; 
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import FeaturedGifts from './components/FeaturedGifts';
import SupportBanner from './components/SupportBanner';
import LiveRanking from './components/LiveRanking';
import Footer from './components/Footer';
const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;
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
