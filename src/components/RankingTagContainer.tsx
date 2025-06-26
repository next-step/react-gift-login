import styled from '@emotion/styled';
import RankingSexTagItem from './RankingSexTagItem';
import RankingAnyTagItem from './RankingAnyTagItem';

const StyledRankingTagContainer = styled.div`
  width: 720px;
  height: 150px;
  background-color: ${({ theme }) => theme.symenticPalette.backgroundDefault};
`;
const StyledRankingSexTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledRankingAnyTagItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RankingTag = () => {
  return (
    <>
      <StyledRankingTagContainer>
        <StyledRankingSexTagContainer>
          <RankingSexTagItem></RankingSexTagItem>
        </StyledRankingSexTagContainer>
        <StyledRankingAnyTagItem>
          <RankingAnyTagItem></RankingAnyTagItem>
        </StyledRankingAnyTagItem>
      </StyledRankingTagContainer>
    </>
  );
};

export default RankingTag;
