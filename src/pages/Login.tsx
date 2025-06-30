import { LOGIN_CONTENT } from '@/data/loginContent'
import { theme } from '@/styles/theme'
import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'

// * 로그인 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 100vh;

  margin: 0 auto;
  padding-top: ${theme.spacing.spacing11};

  background-color: ${theme.semanticColors.background.default};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// * 로고 이미지
const LogoImg = styled.img`
  width: 88px;
  height: 88px;

  margin-bottom: ${theme.spacing.spacing2};
`

// * 로그인 폼
const LoginForm = styled.form`
  width: 100%;
  max-width: 388px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.spacing4};
`

// * 입력 란
const Input = styled.input`
  width: 100%;

  padding: ${theme.spacing.spacing2} 0;

  font-size: ${theme.typography.subtitle.subtitle1Regular.fontSize};
  font-weight: ${theme.typography.subtitle.subtitle1Regular.fontWeight};
  line-height: ${theme.typography.subtitle.subtitle1Regular.lineHeight};

  border-bottom: 1px solid ${theme.colors.gray.gray400};

  &::placeholder {
    color: ${theme.colors.gray.gray600};
  }

  &:focus {
    border-bottom: 1px solid ${theme.colors.gray.gray800};
  }

  transition: border-bottom 0.2s ease-in-out;
`

// * 로그인 버튼
const Button = styled.button`
  width: 100%;

  padding: ${theme.spacing.spacing3} 0;
  margin-top: ${theme.spacing.spacing8};

  background-color: ${theme.semanticColors.brand.kakaoYellow};
  border-radius: ${theme.spacing.spacing1};

  &:hover {
    background-color: ${theme.semanticColors.brand.kakaoYellowHover};
  }

  &:active {
    background-color: ${theme.semanticColors.brand.kakaoYellowActive};
  }

  transition: background-color 0.2s ease-in-out;
`

// * 로그인 화면
export const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from?: string })?.from || '/'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // ! 로그인 로직 없이 바로 리디렉션
    navigate(from, { replace: true }) // * replace로 히스토리 정리
  }

  return (
    <Container>
      <LogoImg alt="카카오 공식 로고" src={LOGIN_CONTENT.logoImgSrc}></LogoImg>

      <LoginForm onSubmit={handleLogin}>
        <Input placeholder="이메일"></Input>
        <Input placeholder="비밀번호"></Input>
        <Button type="submit">로그인</Button>
      </LoginForm>
    </Container>
  )
}
