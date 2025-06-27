import styled from '@emotion/styled';

const NavigationBar = () => {
  return <Container>선물하기</Container>;
};

export default NavigationBar;

const Container = styled.div`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  position: fixed;
  top: 0;
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
`;
