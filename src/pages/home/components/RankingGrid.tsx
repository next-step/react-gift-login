import { css } from "@emotion/react";
import { useState } from "react";
import { RankingCard } from "./RankingCard";
import { type GenderType, type TabType } from "../../../constants/ranking";
import { mockRankingData } from "@/mock/mockData";

type RankingGridProps = {
  gender: GenderType;
  tab: TabType;
};

const INITIAL_COUNT = 4;

export const RankingGrid = ({ gender, tab }: RankingGridProps) => {
  void gender;
  void tab;

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? mockRankingData
    : mockRankingData.slice(0, INITIAL_COUNT);
  const canToggle = mockRankingData.length > INITIAL_COUNT;

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
