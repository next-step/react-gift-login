// NavigationBar.tsx
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.div`
  position: fixed;
  min-width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;

const StyledNavIcon = styled.li`
  a {
    color: black;
    text-decoration: none;
  }
  list-style: none;
  display: flex;
  align-items: center;
  padding: 12px 30px;
`;

const StyledNavTextLi = styled.li`
  a {
    color: black;
  }
  list-style: none;
  display: flex;
  align-items: center;
  padding: 13px 24px;
  ${({ theme }) => theme.typography.title1Bold};
`;

const NavigationBar = () => {
  return (
    <StyledNavbar>
      <StyledNavIcon>뒤로가기</StyledNavIcon>
      <StyledNavTextLi>선물하기</StyledNavTextLi>
      <StyledNavIcon>
        <Link to='/login'>로그인</Link>
      </StyledNavIcon>
    </StyledNavbar>
  );
};

export default NavigationBar;
