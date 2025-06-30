import { useNavigate, useLocation } from 'react-router-dom'
import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import Header from '@/components/Header'
import { resetStyle } from '@/styles/reset'
import theme from '@/styles/theme'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string })?.from || '/'

  const handleLogin = () => {
    navigate(from, { replace: true })
  }

  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <PageWrapper>
        <LoginForm>
          <Logo src="/loginlogo.svg" alt="kakao logo" />
          <LoginBox>
            <Input type="email" placeholder="이메일" />
            <Spacer />
            <Input type="password" placeholder="비밀번호" />
            <Spacer height="48px" />
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
          </LoginBox>
        </LoginForm>
      </PageWrapper>
    </ThemeProvider>
  )
}

const PageWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 56px); 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`

const LoginForm = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  width: 5.5rem;
  margin-bottom: 2rem;
`

const LoginBox = styled.div`
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
  padding: 8px 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.typography.body1Regular};
  &:focus {
    outline: none;
    border-color: black;
  }
`

const Spacer = styled.div<{ height?: string }>`
  height: ${({ height }) => height || '16px'};
`

const LoginButton = styled.button`
  width: 100%;
  height: 2.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.typography.body2Regular};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.pressed};
  }
`
