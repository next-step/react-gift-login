import { FiChevronLeft } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import styled from '@emotion/styled'

const NavBar = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.textDefault};
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
  `}
`
const IconButton = styled.button`
  background: none;
  border : none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const NavigationBar = () => {
  return (
    <NavBar>
      <IconButton>
        <FiChevronLeft size = {30}/>
      </IconButton>
      <Title>선물하기</Title>
      <IconButton>
        <GoPerson size = {30}/>
      </IconButton>
    </NavBar>
  );
};

export default NavigationBar;