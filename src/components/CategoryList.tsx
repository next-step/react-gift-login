// src/components/CategoryList.tsx
import React from 'react';
import styled from '@emotion/styled';
import { colors, spaces, fontSizes } from '../tokens/designTokens';
import categories from '../data/categories';

const Wrap = styled.section`
  padding: ${spaces.lg} ${spaces.md};
  background: ${colors.bg};
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: ${spaces.md};
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.text};
  font-size: ${fontSizes.body};
`;

const IconWrapper = styled.div`
  width: 56px;        /* 이미지 크기 고정 */
  height: 56px;
  margin-bottom: ${spaces.xs};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export default function CategoryList() {
  return (
    <Wrap>
      <List>
        {categories.map(item => (
          <Item key={item.themeId}>
            {/* 이미지 표시 */}
            <IconWrapper>
              <img src={item.image} alt={item.name} />
            </IconWrapper>
            <span>{item.name}</span>
          </Item>
        ))}
      </List>
    </Wrap>
  );
}
