import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  max-width: 720px;
  width: 720px;
  height: 45px;
  margin: 0 auto;
  background-color: white;
  padding: 0 20px;
`;

const BackButton = styled.div`
  cursor: pointer;
`;

//theme 가져오기에서 typograpy 없다고 뜸 -> styles/emotion.d.ts 파일에 theme 타입 정의 필요
const Title = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
    color: black;
    text-align: center;
    flex-grow: 1;
  `}
`;

const LoginIcon = styled.div`
  cursor: pointer;
`;

type HeaderProps = {
  onBackClick?: () => void;
  onLoginClick?: () => void;
};

function Header({ onBackClick, onLoginClick }: HeaderProps) {
  return (
    <HeaderContainer>
      <BackButton onClick={onBackClick}>뒤로가기</BackButton>
      <Title>선물하기</Title>
      <LoginIcon onClick={onLoginClick}>로그인 아이콘</LoginIcon>
    </HeaderContainer>
  );
}

export default Header;
