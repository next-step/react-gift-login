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

const imageStyle = css`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f3f4f5;
`;

const labelStyle = css`
  font-size: 12px;
  color: #2a3038;
`;
