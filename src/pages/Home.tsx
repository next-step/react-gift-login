import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { Nav } from '@/components/home/Nav'
import { Category } from '@/components/home/Category'

// * 홈 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 100vh;

  margin: 0 auto;

  background-color: ${theme.colors.gray.gray00};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

// * 메인
export const Home = () => {
  return (
    <Container>
      {/* 네비게이션 */}
      <Nav />
      {/* 선물할 친구 섹션 */}
      {/* 카테고리 섹션 */}
      <Category />
      {/* 기타 배너 섹션 */}
      {/* 실시간 급상승 섹션 */}
    </Container>
  )
}
