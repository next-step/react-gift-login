import styled from '@emotion/styled';

const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  background-color: white;

  position: fixed;
  width: 100%;
  max-width: 720px;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #eee;

  margin-bottom: 0px;
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
