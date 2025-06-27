import { useEffect, useState } from 'react';
import { trendingGiftsMockData } from '@/data/trendingGfitsMockData';
import TabContentWrapper from '../TabContentWrapper/TabContentWrapper';
import ProductGrid from '../ProductGrid/ProductGrid';

// '전체' 탭
export function AllTab() {
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
  const [data, setData] = useState(trendingGiftsMockData);

  useEffect(() => {
    // 현재는 mock 데이터로 대체
    setData(trendingGiftsMockData);
  }, [selectedTabIdx]);

  return (
    <TabContentWrapper selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx}>
      <ProductGrid products={data} />
    </TabContentWrapper>
  );
}

// '여성이' 탭
export function WomenTab() {
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
  const [data, setData] = useState(trendingGiftsMockData);

  useEffect(() => {
    setData(trendingGiftsMockData);
  }, [selectedTabIdx]);

  return (
    <TabContentWrapper selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx}>
      <ProductGrid products={data} />
    </TabContentWrapper>
  );
}

// '남성이' 탭
export function MenTab() {
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
  const [data, setData] = useState(trendingGiftsMockData);

  useEffect(() => {
    setData(trendingGiftsMockData);
  }, [selectedTabIdx]);

  return (
    <TabContentWrapper selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx}>
      <ProductGrid products={data} />
    </TabContentWrapper>
  );
}

// '청소년이' 탭
export function TeenTab() {
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
  const [data, setData] = useState(trendingGiftsMockData);

  useEffect(() => {
    setData(trendingGiftsMockData);
  }, [selectedTabIdx]);

  return (
    <TabContentWrapper selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx}>
      <ProductGrid products={data} />
    </TabContentWrapper>
  );
}
