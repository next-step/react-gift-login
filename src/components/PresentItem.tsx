import { GOODS_DATA } from '@assets/GOODS_DATA';
import type { Goods } from '@assets/GOODS_DATA';
import styled from '@emotion/styled';

const StyledPresentItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 4px;
`;
const StyledPresentItemDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const PresentItem = () => {
  return (
    <>
      {GOODS_DATA.map((item: Goods) => (
        <div key={item.id}>
          <StyledPresentItemDiv>
            <StyledPresentItemImage src={item.imageURL} alt='' />
            <p className='brand_name'>{item.brandInfo.name}</p>
            <p className='goods_name'>{item.name}</p>
            <p className='goods_price'>{item.price.sellingPrice.toLocaleString()}원</p>
          </StyledPresentItemDiv>
        </div>
      ))}
    </>
  );
};
//toLocaleString() 메서드는 숫자나 날짜 객체를 문자열로 변환할 때 사용
export default PresentItem;
