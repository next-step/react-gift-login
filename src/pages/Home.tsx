import { JSX } from 'react';
import Gift_Thema from '@/components/GiftThema/Gift_Thema.tsx';
import Gift_Ranking from '@/components/GiftRanking/Gift_Ranking.tsx';
import Header from '@/components/Header/Header.tsx';
import Choose_Friend from '@/components/ChooseFriend/Choose_Friend.tsx';

const Home = (): JSX.Element => {

  return (
    <div>
      <Header />
      <Choose_Friend />
      <Gift_Thema />
      <Gift_Ranking />
    </div>
  )
}

export default Home;