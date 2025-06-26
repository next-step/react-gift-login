/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import FilterButtons from './FilterButtons';
import RisingList from './RisingList';

export default function RisingSection() {
  return (
    <Container>
      <Title>실시간 급상승 선물 랭킹</Title>
      <div style={{ marginBottom: '16px' }}>
        <FilterButtons />
      </div>
      <RisingList />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  margin-bottom: 16px;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray1000};
  margin-bottom: 12px;
`;
