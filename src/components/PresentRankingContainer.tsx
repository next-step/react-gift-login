import styled from '@emotion/styled';
import PresentRankingItem from './PresentRankingItem';
import RankingTagContainer from './RankingTagContainer';
import { useState } from 'react';

const StyledPresentRankingContainer = styled.div`
  background-color: ${({ theme }) => theme.symenticPalette.backgroundDefault};
`;

const StyledPrsentRankingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;
const StyledPresenetRankingAddItemBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: ${({ theme }) => theme.spacing.spacing2} 0px ${({ theme }) => theme.spacing.spacing10} 0px;
`;
const StyledPresenetRankingAddItemBtn = styled.button`
  width: 80%;
  height: 80%;
  padding: ${({ theme }) => theme.spacing.spacing5};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.symenticPalette.backgroundDefault};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.palette.gray500};
`;

const PresentRankingContainer = () => {
  const [isVisible, setisVisible] = useState(false);

  const handelToogle = () => {
    setisVisible((prev) => !prev);
  };

  return (
    <StyledPresentRankingContainer>
      <p>실시간 급상승 선물랭킹</p>
      <div>
        <RankingTagContainer></RankingTagContainer>
      </div>
      <StyledPrsentRankingDiv>
        <PresentRankingItem isVisible={isVisible}></PresentRankingItem>
      </StyledPrsentRankingDiv>
      <StyledPresenetRankingAddItemBtnDiv>
        <StyledPresenetRankingAddItemBtn onClick={handelToogle}>더보기</StyledPresenetRankingAddItemBtn>
      </StyledPresenetRankingAddItemBtnDiv>
    </StyledPresentRankingContainer>
  );
};

export default PresentRankingContainer;
