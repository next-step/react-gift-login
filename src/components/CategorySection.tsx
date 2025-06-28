/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';
import CategoryItem from './Shared/CategoryItem'; 

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

const CategorySection = ({ categories }: Props) => {
  const theme = useTheme();

  return (
    <section css={sectionStyle}>
      <h2 css={titleStyle(theme)}>선물 테마</h2>

      <div css={gridStyle}>
        {categories.map(({ themeId, name, image }) => (
          <CategoryItem key={themeId} themeId={themeId} name={name} image={image} theme={theme} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
