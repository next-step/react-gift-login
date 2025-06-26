/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { mockCategories } from '@/data/categories';

const CategorySection = () => {
  const theme = useTheme();

  const sectionStyle = css`
    padding: ${theme.spacing[2]};
  `;

  const titleWrapperStyle = css`
    margin-bottom: ${theme.spacing[4]};
    padding: ${theme.spacing[0]} ${theme.spacing[1]};
  `;

  const titleStyle = css`
    font-size: ${theme.typography.title.title1Bold.fontSize};
    font-weight: ${theme.typography.title.title1Bold.fontWeight};
    line-height: ${theme.typography.title.title1Bold.lineHeight};
  `;

  const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${theme.spacing[5]} ${theme.spacing[1]};
  `;

  const itemStyle = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
  `;

  const imageStyle = css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  `;

  const textStyle = css`
    font-size: ${theme.typography.label.label2Regular.fontSize};
    font-weight: ${theme.typography.label.label2Regular.fontWeight};
    line-height: ${theme.typography.label.label2Regular.lineHeight};
    color: ${theme.color.semantic.text.default};
  `;

  return (
    <section css={sectionStyle}>
      <div css={titleWrapperStyle}>
        <h3 css={titleStyle}>선물 테마</h3>
      </div>
      <div css={gridStyle}>
        {mockCategories.map(category => (
          <div key={category.themeId} css={itemStyle}>
            <img src={category.image} alt={category.name} css={imageStyle} />
            <p css={textStyle}>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
