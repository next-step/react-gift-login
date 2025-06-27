// NavigationBar.tsx
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Navbar = styled.div`
  position: fixed;
  min-width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.symenticPalette.backgroundDefault};
`;

const NavItem = styled.li`
  a {
    color: black;
    text-decoration: none;
  }
  list-style: none;
  display: flex;
  align-items: center;
  padding: 12px 30px;
`;

const NavItem2 = styled.li`
  a {
    color: black;
  }
  list-style: none;
  display: flex;
  align-items: center;
  padding: 13px 24px;
  font: ${({ theme }) => theme.typography.body2Bold};
`;

const NavigationBar = () => {
  return (
    <Navbar>
      <NavItem>홈</NavItem>
      <NavItem2>선물하기</NavItem2>
      <NavItem>
        <Link to='/login'>로그인</Link>
      </NavItem>
    </Navbar>
  );
};

export default NavigationBar;
