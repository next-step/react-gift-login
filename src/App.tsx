import { useState } from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import styled from '@emotion/styled'

import Layout from './components/Layout'

import categories from './mocks/category.mock'

const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  width: 700px;
  height: 100vh;
  margin: 0 auto;
`
const Nav = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavTitle = styled.h1`
  font-weight: ${({ theme }) => theme.typography['title1Bold']['fontWeight']};
  font-size: ${({ theme }) => theme.typography['title1Bold']['fontSize']};
  line-height: ${({ theme }) => theme.typography['title1Bold']['lineHeight']};
`

const SelectFriendsWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  padding: 20px;
  box-sizing: border-box;
`

const SelectFriendsBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
`

const SelectFriendsBoxPlusButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '+';
    font-size: 34px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.gray[1000]};
  }
`

const SelectFriendsBoxText = styled.span`
  font-size: 17px;
  font-weight: bold;
  padding: 20px 10px;
`

const CategoryWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
  padding: 30px 10px;
  box-sizing: border-box;
`
const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography['title1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['title1Bold'].lineHeight};
`

const CategoryItemWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding-top: 16px;
  box-sizing: border-box;
  
`
const CategoryItem = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CategoryItemImg = styled.img`
  width: 50px;
  height: 50px;
`

const CategoryItemTitle = styled.p`
  font-size: 11px;
  text-align: center;
`

function CategoryItemList() {

  return (
    <>
      {categories.map((item) => (
        <CategoryItem key={item.themeId}>
          <CategoryItemImg src={item.image} alt={item.name}></CategoryItemImg>
          <CategoryItemTitle>{item.name}</CategoryItemTitle>
  
        </CategoryItem>
      ))}
    </>
  )
}

const KatecampBanner = styled.div`
  width: 95%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0px 20px;
  padding: 10px;
`

const KatecampBannerTextOne = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 11px;
`
const KatecampBannerTextTwo = styled.p`
  color: ${({ theme }) => theme.colors.gray[1000]};
  font-size: 14px;
  line-height:  ${({ theme }) => theme.typography['title1Bold'].lineHeight};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Main>
          <Nav>
            <NavTitle>선물하기</NavTitle>
          </Nav>
          <SelectFriendsWrapper>
            <SelectFriendsBox>
              <SelectFriendsBoxPlusButton></SelectFriendsBoxPlusButton>
              <SelectFriendsBoxText>선물할 친구를 선택해 주세요.</SelectFriendsBoxText>
            </SelectFriendsBox>
          </SelectFriendsWrapper>
          <CategoryWrapper>
            <CategoryTitle>선물 테마</CategoryTitle>
            <CategoryItemWrapper>
              <CategoryItemList></CategoryItemList>
            </CategoryItemWrapper>
          </CategoryWrapper>
          <KatecampBanner>
            <KatecampBannerTextOne>카카오테크 캠퍼스 3기여러분</KatecampBannerTextOne>
            <KatecampBannerTextTwo>프론트엔드 2단계 과제 화이팅!🎉</KatecampBannerTextTwo>
          </KatecampBanner>
        </Main>
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default App
