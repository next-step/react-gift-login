import GiftBanner from '../GiftBanner/GiftBanner';
import Category from '../Category/Category';
import EventBanner from '../EventBanner/EventBanner';
import TrendingGifts from '../TrendingGifts/TrendingGifts';
import { Content } from '../../App.styles';
import Layout from '@/layout';

function Home() {
  return (
    <Layout>
      <main>
        <GiftBanner />
        <Content>
          <Category />
          <EventBanner />
          <TrendingGifts />
        </Content>
      </main>
    </Layout>
  );
}

export default Home;
