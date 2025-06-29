import { PaddingMd } from "../padding/Padding";
import styled from "@emotion/styled";
import RankingItem from "./RankingItem";
import { PaddingLg } from "./../padding/Padding";
import PersonCategory from "./PersonCategory";
import BehaviorCategory from "./BehaviorCategory";
import { useState } from "react";
import type { behaviorFilterType, personFilterType } from "./types";
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
const allProducts = Array.from({ length: 21 }, (_, i) => ({
  ...mockRankingProducts,
  id: i + 1,
}));
//스타일링
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
`;
const personFilterOptions = [
  { label: "전체", emoji: "All" },
  { label: "남자가", emoji: "👨🏻" },
  { label: "여자가", emoji: "👩🏻" },
  { label: "청소년이", emoji: "👦🏻" },
] as const;

const behaviorOptions = ["받고 싶어한", "많이 선물한", "위시로 받은"] as const;

const Ranking = () => {
  const [showAll, setShowAll] = useState(false);
  const [personFilter, setPersonFilter] = useState<personFilterType>(
    personFilterOptions[0]
  );
  const [behaviorFilter, setBehaviorFilter] = useState<behaviorFilterType>(
    behaviorOptions[0]
  );
  const visible = showAll ? allProducts : allProducts.slice(0, 6);
  console.log("사람", personFilter);
  console.log("행동", behaviorFilter);
  return (
    <RankingWrapper>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <PaddingMd />
      <PersonCategory
        options={personFilterOptions}
        selected={personFilter}
        onSelect={setPersonFilter}
      />
      <PaddingMd />
      <BehaviorCategory
        options={behaviorOptions}
        selected={behaviorFilter}
        onSelect={setBehaviorFilter}
      />
      <PaddingMd />
      <RankingProducts>
        {visible.map((product) => (
          <RankingItem key={product.id} {...product}></RankingItem>
        ))}
      </RankingProducts>

      <PaddingLg />
      <ShowMoreBtn
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        {showAll ? "접기" : "더보기"}
      </ShowMoreBtn>

      <PaddingLg />
    </RankingWrapper>
  );
};

export default Ranking;
