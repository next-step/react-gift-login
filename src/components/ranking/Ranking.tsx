import { PaddingMd } from "../padding/Padding";
import styled from "@emotion/styled";
import RankingItem from "./RankingItem";
import { PaddingLg } from './../padding/Padding';
import PersonCategory from './PersonCategory';
import BehaviorCategory from './BehaviorCategory';
import { useState } from "react";
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
const allProducts = Array.from({ length: 21 }, (_, i) => (
  <RankingItem
    key={i}
    id={mockRankingProducts.id}
    name={mockRankingProducts.name}
    imageURL={mockRankingProducts.imageURL}
    price={mockRankingProducts.price}
    brandInfo={mockRankingProducts.brandInfo}
  />
))

const RankingWrapper = styled.section`
  align-items: left;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4}  ${({ theme }) => theme.spacing.spacing3};
`;
const RankingTitle = styled.h3`
  ${({ theme }) => theme.typography.title1Bold};

  color: ${({ theme }) => theme.colors.gray.gray900};
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
  const [showAll, setShowAll] = useState(false);
  //보여줄 상품 목록
const visible =  showAll? allProducts : allProducts.slice(0,6)

  return (
    <RankingWrapper>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <PaddingMd />
      <PersonCategory />
      <PaddingMd />
      <BehaviorCategory />
      <PaddingMd />
      <RankingProducts>
        {visible}
      </RankingProducts>

      <PaddingLg />
      <ShowMoreBtn onClick={()=>{
        setShowAll(!showAll)
  
      }}>{showAll? '접기': '더보기'}</ShowMoreBtn>

      <PaddingLg />
    </RankingWrapper>
  );
};

export default Ranking;
