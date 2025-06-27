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
`;
const StyledPresenetRankingAddItemBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px 0px 30px 0px;
`;
const StyledPresenetRankingAddItemBtn = styled.button`
  width: 80%;
  height: 80%;
  padding: 10px;
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
