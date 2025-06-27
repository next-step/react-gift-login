/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { categories } from '../data/categories';

export const CategorySection = () => {
  const theme = useTheme();
  
  const sectionStyle = css`
    padding: ${theme.spacing.spacing4};
    background-color: white;
  `;

  const titleStyle = css`
    ${theme.typography.title1Bold}
    color: ${theme.semantic.text.default};
    margin-bottom: ${theme.spacing.spacing5};
  `;

  const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: ${theme.spacing.spacing5};
  `;

  const imageStyle = css`
    width: 52px;
    height: 52px;
    margin-bottom: ${theme.spacing.spacing1};
  `;

  const nameStyle = css`
    ${theme.typography.label2Regular}
    color: ${theme.semantic.text.default};
    text-align: center;
  `;

  return (
    <section css={sectionStyle}>
      <h1 css={titleStyle}>선물 테마</h1>
      <div css={gridStyle}>
        {categories.slice(0, 15).map((category) => (
          <div key={category.themeId} css={itemStyle}>
            <img 
              css={imageStyle}
              src={category.image}
              alt={category.name}
            />
            <span css={nameStyle}>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
// theme를 사용하지 않은 스타일을 컴포넌트 외부로 옮겼습니다. 
const itemStyle = css` 
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
`;
