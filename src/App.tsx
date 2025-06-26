/** @jsxImportSource @emotion/react */
import React from 'react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { NavBar } from '@/components/NavBar';
import { CategorySection } from '@/sections/CategorySection';
import { RankingSection } from '@/sections/RankingSection';
import { FriendSelectionSection } from '@/components/FriendSelectionSection';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />     
      <FriendSelectionSection />
      <CategorySection />
      <RankingSection />
    </>
  );
}

export default App;
