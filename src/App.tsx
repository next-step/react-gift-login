import styled from '@emotion/styled';

const AppContainer = styled.div`
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

function App() {
  return (
    <AppContainer>
      <Title>React Gift Login</Title>
      <Subtitle>Emotion 스타일링이 적용된 앱입니다!</Subtitle>
    </AppContainer>
  );
}

export default App;
