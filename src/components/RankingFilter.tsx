import styled from '@emotion/styled';

const FilterBar = styled.div``;
const WantedBar = styled.div``;

const FilterBtn = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#3182f6' : '#f5f6fa')};
  color: ${({ active }) => (active ? '#fff' : '#222')};
  border: none;
  border-radius: 20px;
  padding: 6px 18px;
  font-size: 15px;
  cursor: pointer;
`;

const WantedBtn = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#3182f6' : '#f5f6fa')};
  color: ${({ active }) => (active ? '#fff' : '#222')};
  border: none;
  border-radius: 20px;
  padding: 6px 18px;
  font-size: 15px;
  cursor: pointer;
`;

function RankingFilter() {
  // 실제로는 상태로 active 관리
  return (
    <>
      실시간 급상승 선물랭킹
      <FilterBar>
        <FilterBtn active>전체</FilterBtn>
        <FilterBtn>여성</FilterBtn>
        <FilterBtn>남성</FilterBtn>
        <FilterBtn>청소년</FilterBtn>
      </FilterBar>
      <WantedBar>
        <WantedBtn active>받고 싶어한</WantedBtn>
        <WantedBtn>많이 선물한</WantedBtn>
        <WantedBtn>위시로 받은</WantedBtn>
      </WantedBar>
    </>
  );
}

export default RankingFilter;
