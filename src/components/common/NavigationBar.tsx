/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { FiChevronLeft, FiUser } from 'react-icons/fi';

const NavigationBar = () => {
  return (
    <NavBar>
      <IconButton>
        <FiChevronLeft size={24} />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton>
        <FiUser size={24} />
      </IconButton>
    </NavBar>
  );
};


const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font: ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.textColors.default};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export default NavigationBar;
