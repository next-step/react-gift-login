import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';

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

// 테마 토큰을 사용하는 예시 컴포넌트
const ThemeExample = styled.div`
  background-color: #fee500;
  color: #2a3038;
  padding: 16px;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Title>React Gift Login</Title>
        <Subtitle>Pretendard 폰트가 적용된 앱입니다!</Subtitle>
        <ThemeExample>
          카카오 노란색 배경에 디자인 토큰이 적용된 예시입니다!
        </ThemeExample>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
