import styled from '@emotion/styled';
import PageLayout from '@/components/Layout/PageLayout';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundFill};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  font: ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.semantic.textSub};
  font: ${({ theme }) => theme.typography.subtitle1Regular};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Warning = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.criticalBackground};
  color: ${({ theme }) => theme.colors.semantic.critical};
  padding: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 8px;
  font: ${({ theme }) => theme.typography.body1Regular};
`;

function App() {
  return (
    <PageLayout>
      <Container>
        <Title>제목 테스트</Title>
        <Subtitle>테스트</Subtitle>
        <Warning>에러 테스트</Warning>
      </Container>
    </PageLayout>
  );
}

export default App;
