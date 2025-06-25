import { useState } from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import styled from '@emotion/styled'

import Layout from './components/Layout'

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
const NavTitle = styled.span`
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
        </Main>
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default App
