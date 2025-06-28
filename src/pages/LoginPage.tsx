import { useState } from 'react'
import styled from '@emotion/styled'
import { Section } from '@/components/layout'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.spacing8} ${props => props.theme.spacing.spacing4};
  min-height: 60vh;
  justify-content: center;
`

const Logo = styled.div`
  font-size: ${props => props.theme.typography.title1Bold.fontSize};
  font-weight: ${props => props.theme.typography.title1Bold.fontWeight};
  color: ${props => props.theme.semanticColors.text.default};
  margin-bottom: ${props => props.theme.spacing.spacing8};
  text-align: center;
`

const InputGroup = styled.div`
  width: 100%;
  max-width: 280px;
  margin-bottom: ${props => props.theme.spacing.spacing4};
`

const InputLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.typography.body2Bold.fontSize};
  font-weight: ${props => props.theme.typography.body2Bold.fontWeight};
  color: ${props => props.theme.semanticColors.text.default};
  margin-bottom: ${props => props.theme.spacing.spacing2};
`

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.spacing3} ${props => props.theme.spacing.spacing4};
  border: 1px solid ${props => props.theme.semanticColors.border.default};
  border-radius: 6px;
  font-size: ${props => props.theme.typography.body2Regular.fontSize};
  font-family: 'Pretendard', sans-serif;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.semanticColors.kakaoYellow};
  }
  
  &::placeholder {
    color: ${props => props.theme.semanticColors.text.placeholder};
  }
`

const LoginButton = styled.button`
  width: 100%;
  max-width: 280px;
  background-color: ${props => props.theme.semanticColors.kakaoYellow};
  color: ${props => props.theme.colors.gray900};
  border: none;
  padding: ${props => props.theme.spacing.spacing4} ${props => props.theme.spacing.spacing6};
  border-radius: 6px;
  font-size: ${props => props.theme.typography.body1Bold.fontSize};
  font-weight: ${props => props.theme.typography.body1Bold.fontWeight};
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Pretendard', sans-serif;
  margin-top: ${props => props.theme.spacing.spacing6};

  &:hover {
    background-color: ${props => props.theme.semanticColors.kakaoYellowHover};
  }

  &:active {
    background-color: ${props => props.theme.semanticColors.kakaoYellowActive};
  }
`

interface LoginPageProps {
  onLoginSuccess?: () => void;
}

const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 임시 로그인 처리 - 단순히 메인 페이지로 이동
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <Section>
      <LoginContainer>
        <Logo>kakao</Logo>
        
        <InputGroup>
          <InputLabel htmlFor="email">이메일</InputLabel>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        
        <InputGroup>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        
        <LoginButton onClick={handleLogin}>
          로그인
        </LoginButton>
      </LoginContainer>
    </Section>
  );
};

export default LoginPage; 