import styled from '@emotion/styled';

const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderBar>
      <Title>선물하기</Title>
    </HeaderBar>
  );
}

export default Header;
