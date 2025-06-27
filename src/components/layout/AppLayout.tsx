import styled from "@emotion/styled";
import MainPage from "@/pages/MainPage";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray.gray100};
`;
const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.gray.gray200};
`;

function AppLayout() {
  return (
    <Background>
      <Container>
        <MainPage />
      </Container>
    </Background>
  );
}

export default AppLayout;
