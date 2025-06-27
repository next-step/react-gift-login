/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';

type CategoryItemProps = {
  themeId: number;
  name: string;
  image: string;
  theme: ThemeType;
};

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

const CategoryItem = ({ themeId, name, image, theme }: CategoryItemProps) => {
  return (
    <div key={themeId} css={itemStyle}>
      <img src={image} alt={name} width={100} height={100} css={imageStyle} />
      <span css={nameStyle(theme)} title={name}>
        {name}
      </span>
    </div>
  );
};

export default CategoryItem;
