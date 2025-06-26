import { JSX } from 'react';
import Gift_Thema from '@/components/Gift_Thema.tsx';
import Gift_Ranking from '@/components/Gift_Ranking.tsx';
import Header from '@/components/Header.tsx';
import Choose_Friend from '@/components/Choose_Friend.tsx';

const Home = (): JSX.Element => {

  return (
    <div>
      <div>Home</div>
      <Header />
      <Choose_Friend />
      <Gift_Thema />
      <Gift_Ranking />
    </div>
  )
}

export default Home;