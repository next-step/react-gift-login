import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { Link } from 'react-router-dom'

// * 네비게이션
const Navigation = styled.nav`
  width: 100%;
  height: 44px;

  background-color: ${theme.colors.gray.gray00};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

// * 네비게이션 버튼
const Button = styled.button`
  height: 100%;
  aspect-ratio: 1 / 1; // 높이에 따라 너비 1:1로 자동 조정

  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`

// * 네비게이션 버튼 아이콘
const Icon = styled.span`
  font-family: 'Material Icons Outlined';
  font-size: ${theme.typography.title.title1Regular.fontSize};
`

// * 네비게이션 컴포넌트
export const Nav = () => {
  return (
    <Navigation>
      <Button>
        {/* 뒤로가기 아이콘 - Material Icons 패키지 사용 */}
        <Icon>arrow_back_ios</Icon>
      </Button>
      <Link to="/" css={theme.typography.title.title1Bold}>
        선물하기
      </Link>
      <Button>
        {/* 프로필 아이콘 - Material Icons 패키지 사용 */}
        <Icon>person</Icon>
      </Button>
    </Navigation>
  )
}
