import styled from '@emotion/styled';
import { Header } from '@/components/Header';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  max-width: 720px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-width: 2px;
  border-color: black;
  border-style: solid;
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
