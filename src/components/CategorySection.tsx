/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

type Category = {
  themeId: number;
  name: string;
  image: string;
};

type Props = {
  categories: Category[];
};

const CategorySection = ({ categories }: Props) => {
  const theme = useTheme();

  return (
    <section
      css={css`
        padding: 16px;
      `}
    >
      <h2
        css={css`
          margin-bottom: 12px;
          color: ${theme.color.semantic.textDefault};
          font-size: ${theme.typography.title1Bold.fontSize};
          font-weight: ${theme.typography.title1Bold.fontWeight};
          line-height: ${theme.typography.title1Bold.lineHeight};
        `}
      >
        선물 테마
      </h2>

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 16px;
          row-gap: 24px;
        `}
      >
        {categories.map(({ themeId, name, image }) => (
          <div
            key={themeId}
            css={css`
              min-width: 104px;
              flex-shrink: 0;
              text-align: center;
              cursor: pointer;
            `}
          >
            <img
              src={image}
              alt={name}
              width={100}
              height={100}
              css={css`
                border-radius: 12px;
                object-fit: cover;
                margin-bottom: 8px;
              `}
            />
            <span
              css={css`
                color: ${theme.color.gray.gray1000};
                font-size: ${theme.typography.body2Regular.fontSize};
                font-weight: ${theme.typography.body2Regular.fontWeight};
                line-height: ${theme.typography.body2Regular.lineHeight};
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              `}
              title={name}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
