/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';
import { DataCategory } from '@/components/Category/DataCategory';

const wrapper = css`
  margin-top: 40px;
`;

const titleStyle = (theme: ThemeType) => css`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.color.semantic.text.default};
  margin-bottom: 20px;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 28px 24px;
`;

const item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  color: #222;
  gap: 8px;
`;

const imageStyle = css`
  width: 70px;
  height: 70px;
  border-radius: 14px;
  object-fit: cover;
`;


const GiftCategoryList = () => {
  const theme = useTheme() as ThemeType;

  return (
    <section css={wrapper}>
      <h2 css={titleStyle(theme)}>선물 테마</h2>
      <div css={grid}>
        {DataCategory.map((itemData) => (
          <div key={itemData.themeId} css={item}>
            <img src={itemData.image} alt={itemData.name} css={imageStyle} />
            <span>{itemData.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftCategoryList;