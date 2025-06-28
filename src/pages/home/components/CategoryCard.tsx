import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

type CategoryCardProps = {
  name: string;
  image: string;
};

export const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <div css={cardStyle}>
      <img src={image} alt={name} css={imageStyle} />
      <span css={labelStyle}>{name}</span>
    </div>
  );
};

const cardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const imageStyle = (theme: Theme) => css`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${theme.colors.colorScale.gray.gray200};
`;

const labelStyle = (theme: Theme) => css`
  font-size: 12px;
  color: ${theme.colors.semantic.text.default};
`;
