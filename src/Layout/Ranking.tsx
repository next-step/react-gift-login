import SexContainer from '@/components/Container/SexContainer';
import CategoryContainer from '@/components/Container/CategoryContainer';
import ItemContainer from '@/components/Container/ItemContainer';
import { mockItem } from '@/mocks/mockItem';
import { RankingContainer, RankingTitle } from '@/styles/RankingStyle.styles.ts';

function Ranking() {
  return (
    <RankingContainer>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <SexContainer />
      <CategoryContainer />
      <ItemContainer itemList={mockItem} />
    </RankingContainer>
  );
}

export default Ranking;
