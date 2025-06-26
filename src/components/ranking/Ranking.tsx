import { PaddingMd } from "../padding/Padding";
import styled from "@emotion/styled";
import RankingItem from "./RankingItem";
import { PaddingLg } from './../padding/Padding';
const mockRankingProducts = {
  id: 123,
  name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
  imageURL:
    "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: "BBQ",
    imageURL:
      "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
  },
};
const RankingWrapper = styled.section`
  align-items: left;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4}  ${({ theme }) => theme.spacing.spacing3};
`;
const RankingTitle = styled.h3`
  ${({ theme }) => theme.typography.title1Bold};

  color: ${({ theme }) => theme.colors.gray.gray900};
`;

const PersonCategory = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;
const BehaviorCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.state.infoBackground};
  color: ${({ theme }) => theme.colors.blue.blue400};
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
`;
const PersonBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3.625rem;
  gap: 4px;
`;
const PersonImage = styled.div`
  ${({ theme }) => theme.typography.subtitle2Bold};
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.state.infoBackground};
  color: ${({ theme }) => theme.colors.blue.blue400};
`;

const BehaviorTextButton = styled.button`
  width: 100%;

  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.colors.state.info};
  display: flex;
  justify-content: center;
  transition:
    color 200ms,
    font-weight 200ms;
`;

const RankingProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing6}  ${({ theme }) => theme.spacing.spacing2};
`;
const ShowMoreBtn = styled.button`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  padding: ${({ theme }) => theme.spacing.spacing4};
  `

const Ranking = () => {
  return (
    <RankingWrapper>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <PaddingMd />
      <PersonCategory>
        <PersonBtn>
          <PersonImage>ALL</PersonImage>
          <p>전체</p>
        </PersonBtn>
        <PersonBtn>
          <PersonImage>👩🏻</PersonImage>
          <p>여성이</p>
        </PersonBtn>
        <PersonBtn>
          <PersonImage>👨🏻</PersonImage>
          <p>남성이</p>
        </PersonBtn>
        <PersonBtn>
          <PersonImage>👦🏻</PersonImage>
          <p>청소년이</p>
        </PersonBtn>
      </PersonCategory>
      <PaddingMd />
      <BehaviorCategory>
        <BehaviorTextButton>받고 싶어한</BehaviorTextButton>
        <BehaviorTextButton>많이 선물한</BehaviorTextButton>
        <BehaviorTextButton>위시로 받은</BehaviorTextButton>
      </BehaviorCategory>
      <PaddingMd />
      <RankingProducts>
        {Array.from({ length: 6 }).map((_, index) => (
          <RankingItem
            key={index}
            id={mockRankingProducts.id}
            name={mockRankingProducts.name}
            imageURL={mockRankingProducts.imageURL}
            price={mockRankingProducts.price}
            brandInfo={mockRankingProducts.brandInfo}
          />
        ))}
      </RankingProducts>

      <PaddingLg />
      <ShowMoreBtn>더보기</ShowMoreBtn>

      <PaddingLg />
    </RankingWrapper>
  );
};

export default Ranking;
