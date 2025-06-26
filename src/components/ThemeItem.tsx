import styled from '@emotion/styled';
import React from 'react';
import type { ThemeItemType } from '@/types/theme';

interface Props {
  item: ThemeItemType;
}

const ThemeItem = ({ item }: Props) => {
  return (
    <ItemWrapper>
      <ItemImage src={item.image} alt={item.name} />
      <ItemLabel>{item.name}</ItemLabel>
    </ItemWrapper>
  );
};

export default ThemeItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
`;

const ItemLabel = styled.span`
  ${({ theme }) => `
    font-size: ${theme.font.label2Regular.size};
    font-weight: ${theme.font.label2Regular.weight};
    line-height: ${theme.font.label2Regular.lineHeight};
  `}
`;
