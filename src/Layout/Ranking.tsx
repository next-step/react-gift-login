import SexContainer from '@/components/Container/SexContainer';
import CategoryContainer from '@/components/Container/CategoryContainer';
import ItemContainer from '@/components/Container/ItemContainer';
import { mockItem } from '@/mocks/mockItem';
import { RankingContainer, RankingTitle } from '@/styles/RankingStyle.styles.ts';

function Ranking() {
  console.log(mockItem);
  return (
    <RankingContainer>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <SexContainer />
      <CategoryContainer />
      <ItemContainer />
    </RankingContainer>
  );
}

export default Ranking;
