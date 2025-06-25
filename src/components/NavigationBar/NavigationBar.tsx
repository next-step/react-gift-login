import styled from '@emotion/styled';
import BackIconSvg from './icons/back.svg';
import ProfileIconSvg from './icons/profile.svg';

const NavigationContainer = styled.section`
  max-width: 720px;
  width: 100%;
  height: 3rem;
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing[2]};
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
`;

const IconButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

const LeftIcon = styled.img`
  width: ${({ theme }) => theme.spacing[6]};
  height: ${({ theme }) => theme.spacing[6]};
`;

const ProfileIcon = styled.img`
  width: ${({ theme }) => theme.spacing[5]};
  height: ${({ theme }) => theme.spacing[5]};
`;

function NavigationBar() {
  return (
    <NavigationContainer>
      <IconButton>
        <LeftIcon src={BackIconSvg} alt="뒤로가기" />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton>
        <ProfileIcon src={ProfileIconSvg} alt="프로필" />
      </IconButton>
    </NavigationContainer>
  );
}

export default NavigationBar;
