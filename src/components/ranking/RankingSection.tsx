import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Section } from '@/components/layout';
import FilterButtonGroup from './FilterButtonGroup';
import ProductGrid from './ProductGrid';
import MoreButton from './MoreButton';
import { type Product } from './ProductCard';
import { products } from '@/data';

type TargetType = 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
type RankType = 'MANY_WISH' | 'MANY_RECEIVE' | 'MANY_WISH_RECEIVE';

const targetOptions = [
  { value: 'ALL', label: '전체' },
  { value: 'FEMALE', label: '여성이' },
  { value: 'MALE', label: '남성이' },
  { value: 'TEEN', label: '청소년이' }
];

const rankOptions = [
  { value: 'MANY_WISH', label: '받고 싶어한' },
  { value: 'MANY_RECEIVE', label: '많이 선물한' },
  { value: 'MANY_WISH_RECEIVE', label: '위시로 받은' }
];

// BBQ 데이터를 21개로 복제하여 랭킹 데이터 생성
const generateRankingProducts = (): Product[] => {
  const baseProduct = products.find(p => p.brandInfo.name === 'BBQ');
  if (!baseProduct) {
    console.warn('BBQ 상품을 찾을 수 없습니다.');
    return [];
  }

  return Array.from({ length: 21 }, (_, index) => ({
    id: `${baseProduct.id}-${index + 1}`,
    productId: baseProduct.id,
    productName: baseProduct.name,
    price: baseProduct.price.sellingPrice,
    brandName: baseProduct.brandInfo.name,
    image: baseProduct.imageURL,
    rank: index + 1,
    isTopThree: index < 3
  }));
};

const RankingSection: React.FC = () => {
  const [targetType, setTargetType] = useState<TargetType>('ALL');
  const [rankType, setRankType] = useState<RankType>('MANY_WISH');
  const [showMore, setShowMore] = useState(false);

  const rankingProducts = generateRankingProducts();

  const handleTargetChange = (value: string) => {
    setTargetType(value as TargetType);
    // URL 파라미터 업데이트는 추후 라우팅 시 구현
    console.log(`Target changed: ${value}, Rank: ${rankType}`);
  };

  const handleRankChange = (value: string) => {
    setRankType(value as RankType);
    // URL 파라미터 업데이트는 추후 라우팅 시 구현
    console.log(`Target: ${targetType}, Rank changed: ${value}`);
  };

  return (
    <Section title="실시간 급상승 선물랭킹" spacing="md">
      <FilterButtonGroup
        type="target"
        options={targetOptions}
        selected={targetType}
        onChange={handleTargetChange}
      />
      
      <FilterButtonGroup
        type="rank"
        options={rankOptions}
        selected={rankType}
        onChange={handleRankChange}
      />
      
      <ProductGrid 
        products={rankingProducts}
        showMore={showMore}
      />
      
      {!showMore && (
        <MoreButton onClick={() => setShowMore(true)}>
          더보기
        </MoreButton>
      )}
    </Section>
  );
};

export default RankingSection; 