import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.gray.gray100};
`;

const MainPage = () => {
  return <Container>카카오 테크 캠퍼스 2단계 미션 1</Container>;
};

export default MainPage;
