/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';

type Category = {
  themeId: number;
  name: string;
  image: string;
};

type Props = {
  categories: Category[];
};

const sectionStyle = css`
  padding: 16px;
`;

const titleStyle = (theme: ThemeType) => css`
  margin-bottom: 12px;
  color: ${theme.color.semantic.textDefault};
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  line-height: ${theme.typography.title1Bold.lineHeight};
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  row-gap: 24px;
`;

const itemStyle = css`
  width: 100%;
  max-width: 104px;
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;
`;

const imageStyle = css`
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 8px;
`;

const nameStyle = (theme: ThemeType) => css`
  color: ${theme.color.gray.gray1000};
  font-size: ${theme.typography.body2Regular.fontSize};
  font-weight: ${theme.typography.body2Regular.fontWeight};
  line-height: ${theme.typography.body2Regular.lineHeight};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CategorySection = ({ categories }: Props) => {
  const theme = useTheme();

  return (
    <section css={sectionStyle}>
      <h2 css={titleStyle(theme)}>선물 테마</h2>

      <div css={gridStyle}>
        {categories.map(({ themeId, name, image }) => (
          <div key={themeId} css={itemStyle}>
            <img src={image} alt={name} width={100} height={100} css={imageStyle} />
            <span css={nameStyle(theme)} title={name}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;