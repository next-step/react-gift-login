import { GOODS_DATA } from '@assets/GOODS_DATA';
import type { Goods } from '@assets/GOODS_DATA';
import styled from '@emotion/styled';
const StyledPresentRankingItemDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledPresentRankingItemImage = styled.img`
  width: 100%;
`;
const StyledPresentRankingItemBrandName = styled.p`
  color: ${({ theme }) => theme.symenticPalette.textDisabled};
`;
const StyledPresentRankingItemPresentItem = styled.p`
  color: ${({ theme }) => theme.typography.body2Regular};
`;
const StyledPresentRankingItemPrasentPrice = styled.p`
  color: ${({ theme }) => theme.typography.body2Bold};
`;
const PresentItem = ({ isVisible }: { isVisible: boolean }) => {
  const repeatCnt = isVisible ? 6 : 18;
  const repeatItems = Array.from({ length: repeatCnt }, (_, i) => GOODS_DATA[i % GOODS_DATA.length]);
  return (
    <>
      {repeatItems.map((item: Goods, index: number) => (
        <div key={index}>
          <StyledPresentRankingItemDiv>
            <StyledPresentRankingItemImage src={item.imageURL} alt='' />
            <StyledPresentRankingItemBrandName className='brand_name'>
              {item.brandInfo.name}
            </StyledPresentRankingItemBrandName>
            <StyledPresentRankingItemPresentItem className='goods_name'>
              {item.name}
            </StyledPresentRankingItemPresentItem>
            <StyledPresentRankingItemPrasentPrice className='goods_price'>
              {item.price.sellingPrice.toLocaleString()}원
            </StyledPresentRankingItemPrasentPrice>
          </StyledPresentRankingItemDiv>
        </div>
      ))}
    </>
  );
};
//toLocaleString() 메서드는 숫자나 날짜 객체를 문자열로 변환할 때 사용
export default PresentItem;
