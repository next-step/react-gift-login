import styled from '@emotion/styled';
import PresentItem from './PresentItem';
import RankingTagContainer from './RankingTagContainer';

const StyledPrsentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Present = () => {
  return (
    <>
      <div>실시간 급상승 선물랭킹</div>
      <div>
        <RankingTagContainer></RankingTagContainer>
      </div>
      <StyledPrsentDiv>
        <PresentItem></PresentItem>
      </StyledPrsentDiv>
    </>
  );
};

export default Present;
