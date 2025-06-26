import { useState } from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import styled from '@emotion/styled'

import Layout from './components/Layout'

import categories from './mocks/category.mock'
import itemList  from './mocks/iteml_list.mock'

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
  position: relative;
`
const NavTitle = styled.h1`
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
  font-size: ${({ theme }) => theme.typography['title1Bold'].fontSize};
  line-height: ${({ theme }) => theme.typography['title1Bold'].lineHeight};
  cursor: pointer;
`
const NavBackBtn = styled.button`
  position:absolute;
  top:0px;
  left:0px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border: none;
  cursor: pointer;

  &::before {
    content: '<';
    font-size: 34px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.gray[1000]};
  }
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
  cursor: pointer;
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
  cursor: pointer;
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

const RealtimeRankWrapper = styled.div`
  width: 95%;
  height: auto; 
  margin: 0 20px;
  margin-top: 40px;
`

const RealtimeRankTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography['title1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['title1Bold'].lineHeight};
`

const RealtimeRankNavWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;

`
const RealtimeRankNavBtnTitleWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const RealtimeRankNavBtnStyle = styled.div<{ isSelected?: boolean}>`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue[400]};
  font-size: ${({ theme }) => theme.typography['label1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['label1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['label1Bold'].lineHeight};
  cursor: pointer;

  background-color: ${({ theme, isSelected}) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[100]};
  color: ${({ theme, isSelected}) =>
    isSelected ? theme.colors.gray[0] : theme.colors.blue[400]};
`

function RealtimeRankNavBtn({ children, onClick, isSelected, }: { children: React.ReactNode; onClick?: () => void; isSelected?: boolean}) {

  return (
    <>
      <RealtimeRankNavBtnStyle onClick={onClick} isSelected={isSelected}>{children}</RealtimeRankNavBtnStyle>
    </>
  );
}

const RealtimeRankNavTitle =styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.gray[600]};
`

const RealtimeRankNav2Wrapper = styled.div`
   width: 100%;
   height: 50px;
   border: 1px solid ${({ theme }) => theme.colors.blue[300]};
   background-color: ${({ theme }) => theme.colors.blue[100]};
   border-radius: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 150px;
`

const RealtimeRankNav2BtnStyle = styled.div<{ isSelected?: boolean}>`
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  font-weight: ${( { theme }) => theme.typography.label1Bold.fontWeight};
  line-height: ${( {theme}) => theme.typography.label1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.blue[500]};
  cursor: pointer;

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[500]};
`

function RealtimeRankNav2Btn({children, onClick, isSelected,}: {children: React.ReactNode; onClick?: () => void; isSelected?: boolean}) {

  return(
    <RealtimeRankNav2BtnStyle onClick={onClick} isSelected={isSelected}>
      {children}
    </RealtimeRankNav2BtnStyle>
  )
}

const RealtimeRankItemWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  box-sizing: border-box;
  /* border: 1px solid black; */
`

const RealtimeItem = styled.div`
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const RealtimeItemImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 190px;
  border-radius: 5px;
`

const RealtimeItemGrayTitle = styled.p`
  font-size: ${({ theme}) => theme.typography['label1Bold'].fontSize};
  
  color: gray;
`

const RealtimeItemTitle = styled.p`
  font-size: ${({ theme}) => theme.typography['label1Bold'].fontSize};
  
`

const RealtimeItemPriceTitle =styled.p`
  font-size: ${({ theme}) => theme.typography['label1Bold'].fontSize};
  font-weight: ${({ theme}) => theme.typography['label1Bold'].fontWeight};
  line-height: ${({ theme}) => theme.typography['label1Bold'].lineHeight};
`

function RealtimeRankItemList() {

  return (
    <>
    {itemList.map((item) => (
        <RealtimeItem key={item.id}>
          <RealtimeItemImg src={item.imageURL} alt={item.name}></RealtimeItemImg>
          <RealtimeItemGrayTitle>{item.brandInfo.name}</RealtimeItemGrayTitle>
          <RealtimeItemTitle>{item.brandInfo.name}</RealtimeItemTitle>
          <RealtimeItemPriceTitle>{item.price.sellingPrice} 원</RealtimeItemPriceTitle>
        </RealtimeItem>
      ))}
    </>
  );
}

const ExtraBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`

const ExtraBtn = styled.button`
  width: 500px;
  height: 40px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme}) => theme.colors.gray[300]};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.typography['label1Bold'].fontSize};
  cursor: pointer;
`

function App() {
  const [selected, setSelected] = useState('');
  const [selected2, setSelected2] = useState('');

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Main>
          <Nav>
            <NavBackBtn></NavBackBtn>
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
          <RealtimeRankWrapper>
            <RealtimeRankTitle>실시간 급상승 선물랭킹</RealtimeRankTitle>
            <RealtimeRankNavWrapper>
              <RealtimeRankNavBtnTitleWrapper>
                <RealtimeRankNavBtn onClick={() => setSelected('ALL')} isSelected={selected === 'ALL'}>ALL</RealtimeRankNavBtn>
                <RealtimeRankNavTitle>전체</RealtimeRankNavTitle>
              </RealtimeRankNavBtnTitleWrapper>
              <RealtimeRankNavBtnTitleWrapper>
                <RealtimeRankNavBtn onClick={() => setSelected('FEMALE')} isSelected={selected === 'FEMALE'}>👩🏻</RealtimeRankNavBtn>
                <RealtimeRankNavTitle>여성이</RealtimeRankNavTitle>
              </RealtimeRankNavBtnTitleWrapper>
              <RealtimeRankNavBtnTitleWrapper>
                <RealtimeRankNavBtn onClick={() => setSelected('MALE')} isSelected={selected === 'MALE'}>👨🏻</RealtimeRankNavBtn>
                <RealtimeRankNavTitle>남성이</RealtimeRankNavTitle>
              </RealtimeRankNavBtnTitleWrapper>
              <RealtimeRankNavBtnTitleWrapper>
                <RealtimeRankNavBtn onClick={() => setSelected('TEEN')} isSelected={selected === 'TEEN'}>👦🏻</RealtimeRankNavBtn>
                <RealtimeRankNavTitle>청소년이</RealtimeRankNavTitle>
              </RealtimeRankNavBtnTitleWrapper>
            </RealtimeRankNavWrapper>
            <RealtimeRankNav2Wrapper>
              <RealtimeRankNav2Btn onClick={() => setSelected2('WANT')} isSelected={selected2 === 'WANT'}>받고 싶어한</RealtimeRankNav2Btn>
              <RealtimeRankNav2Btn onClick={() => setSelected2('MANY')} isSelected={selected2 === 'MANY'}>많이 선물한</RealtimeRankNav2Btn>
              <RealtimeRankNav2Btn onClick={() => setSelected2('WISH')} isSelected={selected2 === 'WISH'}>위시로 받은</RealtimeRankNav2Btn>
            </RealtimeRankNav2Wrapper>
            <RealtimeRankItemWrapper>
              <RealtimeRankItemList>
              </RealtimeRankItemList>
            </RealtimeRankItemWrapper>
          </RealtimeRankWrapper>
          <ExtraBtnWrapper>
            <ExtraBtn>접기</ExtraBtn>
          </ExtraBtnWrapper>
          
        </Main>
      </Layout>
    </ThemeProvider>

    </>
  )
}

export default App
