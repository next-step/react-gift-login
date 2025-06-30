/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 15px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title2Bold};
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.borderDefault};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <FiArrowLeft size={20} onClick={() => navigate('/')} />
        <Title>선물하기</Title>
        <FiUser size={20} onClick={() => navigate('/login')} />
      </HeaderContainer>
      <Background>
        <h1>잘못된 접근입니다.</h1>
        <h2>찾으시는 페이지가 존재하지 않습니다.</h2>
      </Background>
    </>
  );
};

export default NotFoundPage;
