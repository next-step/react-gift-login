import styled from '@emotion/styled';
import GiftItem from './GiftItem';

const GiftList = Array.from({ length: 6 }).map((_, i) => ({
  rank: i + 1,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: 29000,
  brand: 'BBQ',
}));

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 32px;
  padding: 30px 20px;
`;

const GiftGrid = () => {
  return (
    <GridWrapper>
      {GiftList.map((gift) => (
        <GiftItem key={gift.rank} {...gift} />
      ))}
    </GridWrapper>
  );
};

export default GiftGrid;
