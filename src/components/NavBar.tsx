import styled from '@emotion/styled'

const NavStyle = styled.div`
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

function NavBar() {
    return (
        <NavStyle>
            <NavBackBtn></NavBackBtn>
            <NavTitle>선물하기</NavTitle>
        </NavStyle>
    )
}

export default NavBar;