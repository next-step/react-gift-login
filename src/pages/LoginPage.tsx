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
    <Header />
    <Container>
      <LoginForm>
        <Logo src="/loginlogo.svg" alt="kakao logo" />
        <LoginBox>
        <Input type="email" placeholder="이메일" />
        <Block />
        <Input type="password" placeholder="비밀번호" />
        <UnderLoginform />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </LoginBox>
      </LoginForm>
    </Container>
  </ThemeProvider>
  )
}

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray.white};
  padding-top: 2.75rem;
`
const LoginForm = styled.div `
  width: 100%;
  height: calc(-156px + 100vh);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
`

const Logo = styled.img`
  width: 5.5rem;
  display: block;
  overflow-clip-margin: content-box;
  overflow: clip;
`

const LoginBox = styled.div`
  width: 100%;
  max-width: 26.25rem;
  padding: 16px;
`

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: 8px 0px;
  border-width: 0px 0px 1px;
  border-color: ${({ theme }) => theme.colors.gray[400]};
  &:focus {
    outline: none;
    border-color: black;
  }
`

const Block = styled.div`
  width: 100%;
  height: 16px;
  background-color: transparent;
`
const UnderLoginform = styled.div`
  width: 100%;
  height: 48px;
  background-color: transparent;
`
const LoginButton = styled.button`
  width: 100%;
  height: 2.75rem;
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: backgroun-color 200ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.pressed};
  }
`
