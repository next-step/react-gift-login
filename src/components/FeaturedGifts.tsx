// src/components/FeaturedGifts.tsx
import React from 'react';
import styled from '@emotion/styled';
import { colors, fontSizes, spaces } from '../tokens/designTokens';
import products from '../data/products';  // ← 추가

const Wrap = styled.section`
  padding: ${spaces.lg} ${spaces.md};
  background: ${colors.bg};
`;

const Title = styled.h2`
  font-size: ${fontSizes.h2};
  margin-bottom: ${spaces.md};
  color: ${colors.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${spaces.md};
`;

const Card = styled.div`
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: ${spaces.sm};
`;

const GiftName = styled.h3`
  font-size: ${fontSizes.body};
  margin: 0 0 ${spaces.xs} 0;
  color: ${colors.text};
`;

const GiftPrice = styled.p`
  margin: 0;
  font-size: ${fontSizes.body};
  font-weight: 600;
  color: ${colors.primary};
`;

// (선택) 브랜드 로고 작게 보여주고 싶으면 이 컴포넌트도 추가 가능
const BrandLogo = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: ${spaces.xs};
`;

export default function FeaturedGifts() {
  return (
    <Wrap>
      <Title>추천 선물</Title>
      <Grid>
        {products.map(item => (
          <Card key={item.id}>
            <Image src={item.imageURL} alt={item.name} />
            <Content>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: spaces.xs }}>
                <BrandLogo src={item.brandInfo.imageURL} alt={item.brandInfo.name} />
                <span style={{ fontSize: fontSizes.body }}>{item.brandInfo.name}</span>
              </div>
              <GiftName>{item.name}</GiftName>
              <GiftPrice>{item.price.sellingPrice.toLocaleString()}원</GiftPrice>
            </Content>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
