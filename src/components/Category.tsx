/** @jsxImportSource @emotion/react */
import categoryData from "@/data/categoryData";
import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

const Category = () => {
  return (
    <div css={(theme: Theme) => categoryStyle(theme)}>
      {categoryData.map((category) => (
        <div key={category.themeId} className="category-item">
          <img
            src={category.image}
            alt={category.name}
            className="category-image"
            css={imageStyle}
          />
          <h3 className="category-name">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

const categoryStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  font-size: ${theme.typography.label2Bold.size};
  font-weight: ${theme.typography.label2Bold.weight};
  line-height: ${theme.typography.label2Bold.lineHeight};
  text-align: center;
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};
  background: ${theme.colors.semantic.background.default};
  border-bottom: 1px solid ${theme.colors.semantic.border.default};
`;

const imageStyle = () => css`
  width: 100%;
  max-width: 120px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 8px;
  cursor: pointer;
`;

export default Category;
