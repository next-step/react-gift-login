import styled from '@emotion/styled';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Category } from '@/components/Category';
import { SelectFriend } from './components/SelectFriend';
import { Banner } from './components/Banner';
import { GiftRankingHeader } from './components/GiftRankingHeader';
import { GiftList } from './components/GiftList';
import { MoreButton } from './components/MoreButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 720px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

function App() {
  const [isViewMore, setisViewMore] = useState<boolean>(false);
  return (
    <Container>
      <Header />
      <SelectFriend />
      <Category />
      <Banner />
      <GiftRankingHeader />
      <GiftList />
      <MoreButton isViewMore={isViewMore} setIsViewMore={setisViewMore} />
    </Container>
  );
}

export default App;
