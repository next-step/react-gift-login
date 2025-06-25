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
  font-family: 'Pretendard', sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 400;
  line-height: 1.6;
`;

function App() {
  return (
    <AppContainer>
      <Title>React Gift Login</Title>
    </AppContainer>
  );
}
export default App;
