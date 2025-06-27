// NavigationBar.tsx
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d47a1;
  padding: 12px 24px;
  color: white;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
  }
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavigationBar = () => {
  return (
    <Navbar>
      <NavItem>홈</NavItem>
      <NavItem>선물하기</NavItem>
      <NavItem>
        <Link to='/login'>로그인</Link>
      </NavItem>
    </Navbar>
  );
};

export default NavigationBar;
