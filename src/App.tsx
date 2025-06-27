/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { palette, typography } from '@/styles/theme';

import {Layout} from '@/components/Layout';
import {NavBar} from '@/components/NavBar';
import {FriendSelectBar} from '@/components/FriendSelectBar';
import {CategoryGrid} from '@/components/CategoryGrid';
import {Banner }from '@/components/Banner';
import {RankingTabs} from '@/components/RankingTabs';
import type { GenderFilter, SortFilter } from '@/components/RankingTabs';
import {RankingGrid} from '@/components/RankingGrid';
ㄴ
import {
  rankingAll,
  rankingFemale,
  rankingMale,
  rankingTeen,
} from '@/data/rankings';


const App = () => {
  const [list, setList] = useState(rankingAll);

 const handleTab = (gender: GenderFilter, _sort: SortFilter) => {
    switch (gender) {
      case 'FEMALE':
        setList(rankingFemale);
        break;
      case 'MALE':
        setList(rankingMale);
        break;
      case 'TEEN':
        setList(rankingTeen);
        break;
      default:
        setList(rankingAll);
    }
  };

  return (
    <ThemeProvider theme={{ palette, typography }}>
      <GlobalStyle />
      <Layout>
        <NavBar />
        <FriendSelectBar />
        <CategoryGrid />
        <Banner />
        <RankingTabs onChange={handleTab} />
        <RankingGrid items={list} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

