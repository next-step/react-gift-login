import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background-color: white;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
`;

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <NavBar>
      <div>
        <IconButton onClick={() => navigate('/')}>&lt;</IconButton>
      </div>
      <Title>선물하기</Title>
      <div>
        <IconButton onClick={() => navigate('/login')}>&</IconButton>
      </div>
    </NavBar>
  );
};

export default NavigationBar;
