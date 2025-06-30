import { theme } from '@/styles/theme'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

// * NotFound 페이지 컨테이너
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

// * 에러 텍스트
const Error = styled.div`
  font-size: 3.125rem; /* 50px */
  font-weight: ${theme.typography.title.title1Bold.fontWeight};
  margin-bottom: ${theme.spacing.spacing5};

  color: ${theme.semanticColors.status.critical};
`

// * 타이틀
const Title = styled.h1`
  font-size: ${theme.typography.title.title1Bold.fontSize};
  font-weight: ${theme.typography.title.title1Bold.fontWeight};
  line-height: ${theme.typography.title.title1Bold.lineHeight};

  color: ${theme.semanticColors.text.default};
`

// * 서브타이틀
const Subtitle = styled.p`
  font-size: ${theme.typography.subtitle.subtitle2Regular.fontSize};
  font-weight: ${theme.typography.subtitle.subtitle2Regular.fontWeight};
  line-height: ${theme.typography.subtitle.subtitle2Regular.lineHeight};

  color: ${theme.semanticColors.text.sub};
  margin: ${theme.spacing.spacing3} 0 ${theme.spacing.spacing6};
`

// * 홈으로 돌아가기 버튼
const Button = styled.button`
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing6};

  font-size: ${theme.typography.body.body2Regular.fontSize};
  font-weight: ${theme.typography.body.body2Regular.fontWeight};
  line-height: ${theme.typography.body.body2Regular.lineHeight};

  background-color: ${theme.semanticColors.brand.kakaoYellow};
  border: none;
  border-radius: ${theme.spacing.spacing1};
  cursor: pointer;

  &:hover {
    background-color: ${theme.semanticColors.brand.kakaoYellowHover};
  }

  &:active {
    background-color: ${theme.semanticColors.brand.kakaoYellowActive};
  }

  transition: background-color 0.2s ease-in-out;
`

// * 404 NotFound 페이지
export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Error>404 NotFound</Error>
      <Title>페이지를 찾을 수 없어요!</Title>
      <Subtitle>입력하신 주소에 해당하는 페이지가 없습니다.</Subtitle>
      <Button onClick={() => navigate('/')}>홈으로 돌아가기</Button>
    </Container>
  )
}
