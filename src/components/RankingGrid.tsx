import { css } from "@emotion/react";
import { useState } from "react";
import { RankingCard } from "./RankingCard";
import { type GenderType, type TabType } from "../constants/ranking";

type RankingGridProps = {
  gender: GenderType;
  tab: TabType;
};

const MOCK_DATA = [
  {
    id: 1,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 2,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 3,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 4,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 5,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 6,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 7,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 8,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 9,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 10,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 11,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 12,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 13,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 14,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 15,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
];

const INITIAL_COUNT = 4;

export const RankingGrid = ({ gender, tab }: RankingGridProps) => {
  console.log(gender, tab);

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? MOCK_DATA : MOCK_DATA.slice(0, INITIAL_COUNT);
  const canToggle = MOCK_DATA.length > INITIAL_COUNT;

  const handleToggle = () => setShowAll((prev) => !prev);

  return (
    <>
      <div css={gridStyle}>
        {visibleItems.map((item, idx) => (
          <RankingCard
            key={item.id}
            rank={idx + 1}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price.sellingPrice}
            brandName={item.brandInfo.name}
            brandImageURL={item.brandInfo.imageURL}
          />
        ))}
      </div>

      {canToggle && (
        <button css={toggleButtonStyle} onClick={handleToggle}>
          {showAll ? "접기" : "더보기"}
        </button>
      )}
    </>
  );
};

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 12px;
  margin-top: 16px;
`;

const toggleButtonStyle = css`
  margin: 24px auto 0;
  display: block;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #f7f8f9;
  color: #2a3038;
  border: 1px solid #dcdee3;
`;
