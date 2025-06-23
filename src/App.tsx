import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Text = styled.div`
  font-size: 30px;
`;

function App() {
  return (
    <Container>
      <Text>Hello, world!</Text>
    </Container>
  );
}

export default App;
