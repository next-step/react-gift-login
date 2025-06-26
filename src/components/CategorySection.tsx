import { css } from "@emotion/react";
import { CategoryCard } from "./CategoryCard";
import { mockCategoryData } from "../mock/mockData";

export const CategorySection = () => {
  return (
    <section css={sectionStyle}>
      <h2 css={titleStyle}>선물 테마</h2>
      <div css={gridStyle}>
        {mockCategoryData.map((item) => (
          <CategoryCard
            key={item.themeId}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

const sectionStyle = css`
  padding: 20px 16px;
`;

const titleStyle = css`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 8px;
`;
