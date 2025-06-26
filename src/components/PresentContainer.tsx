import styled from '@emotion/styled';
import PresentItem from './PresentItem';
import RankingTagContainer from './RankingTagContainer';

const StyledPresentContainer = styled.div`
  background-color: ${({ theme }) => theme.symenticPalette.backgroundDefault};
`;

const StyledPrsentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const PresentContainer = () => {
  return (
    <StyledPresentContainer>
      <p>실시간 급상승 선물랭킹</p>
      <div>
        <RankingTagContainer></RankingTagContainer>
      </div>
      <StyledPrsentDiv>
        <PresentItem></PresentItem>
      </StyledPrsentDiv>
    </StyledPresentContainer>
  );
};

export default PresentContainer;
