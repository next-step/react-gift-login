import styled from '@emotion/styled';

import { useState, useEffect } from 'react';

const Title = styled.h1`
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 20px;

  margin: 30px 10px 20px;
  padding: 10px 0px 0px 10px;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 10px;
  align-items: flex-end;
  flex-wrap: wrap; // 한 줄에 다 안 들어가면 자동 줄바꿈
`;

const FilterBtn = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  color: ${({ active }) => (active ? '#3182f6' : '#5a5a5a')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 15px;

  margin: auto;

  .icon {
    background: ${({ active }) => (active ? '#3182f6' : '#e0e6ff')};
    color: ${({ active }) => (active ? '#fff' : '#3182f6')};
    border-radius: 15px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  outline: none;
  box-shadow: none;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &:active {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

const TabBar = styled.div`
  display: flex;
  background: #f0f4ff;
  border: 3;
  border-color: #3182f6;
  border-radius: 12px;
  margin: 10px 20px 15px;
  overflow: hidden;
`;

const TabBtn = styled.button<{ active?: boolean }>`
  flex: 1;
  background: ${({ active }) => (active ? 'transparent' : 'transparent')};
  color: #3182f6;

  border: none;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  transition: background 0.2s;

  outline: none;
  box-shadow: none;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &:active {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

const filterOptions = [
  { type: 'ALL', label: '전체', icon: <span className="icon">ALL</span> },
  { type: 'FEMALE', label: '여성', icon: <span className="icon">👩🏻</span> },
  { type: 'MALE', label: '남성', icon: <span className="icon">👨🏻</span> },
  { type: 'TEENAGER', label: '청소년', icon: <span className="icon">🧑🏻</span> },
];

function RankingFilter() {
  const [targetType, setTargetType] = useState(() => {
    return localStorage.getItem('rankingFilterType') || 'ALL';
  });
  useEffect(() => {
    localStorage.setItem('rankingFilterType', targetType);
  }, [targetType]);

  const [rankType, setRankType] = useState(() => {
    return localStorage.getItem('rankingFilterRankType') || 'MANY_WISH';
  });
  useEffect(() => {
    localStorage.setItem('rankingFilterRankType', rankType);
  }, [rankType]);

  return (
    <>
      <Title>실시간 급상승 선물랭킹</Title>

      <FilterBar>
        {filterOptions.map((option) => (
          <FilterBtn
            key={option.type}
            active={targetType === option.type}
            onClick={() => setTargetType(option.type)}
          >
            {option.icon}
            {option.label}
          </FilterBtn>
        ))}
      </FilterBar>
      <TabBar>
        <TabBtn
          active={rankType === 'MANY_WISH'}
          onClick={() => setRankType('MANY_WISH')}
        >
          받고 싶어한
        </TabBtn>
        <TabBtn
          active={rankType === 'MANY_GIFT'}
          onClick={() => setRankType('MANY_GIFT')}
        >
          많이 선물한
        </TabBtn>
        <TabBtn
          active={rankType === 'MANY_RECEIVE'}
          onClick={() => setRankType('MANY_RECEIVE')}
        >
          위시로 받은
        </TabBtn>
      </TabBar>
    </>
  );
}

export default RankingFilter;
