import styled from '@emotion/styled';
import RankingSexTagItem from './RankingSexTagItem';
import RankingAnyTagItem from './RankingAnyTagItem';

const StyledRankingTagContainer = styled.div`
  width: 720px;
  height: 150px;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;
const StyledRankingSexTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledRankingAnyTagItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.palette.blue100};
  border-radius: 10px;
  width: 100%;
`;

const RankingTag = () => {
  return (
    <StyledRankingTagContainer>
      <StyledRankingSexTagContainer>
        <RankingSexTagItem></RankingSexTagItem>
      </StyledRankingSexTagContainer>
      <StyledRankingAnyTagItem>
        <RankingAnyTagItem></RankingAnyTagItem>
      </StyledRankingAnyTagItem>
    </StyledRankingTagContainer>
  );
};

export default RankingTag;
