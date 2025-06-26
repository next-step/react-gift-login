import styled from '@emotion/styled';
import { Header } from '@/components/Header';
import { Category } from '@/components/Category';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 720px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

function App() {
  return (
    <Container>
      <Header />
      <Category />
    </Container>
  );
}

export default App;
