import styled from "@emotion/styled";

const Container = ({ children }: any) => {
  return (
    <ContainerDiv>
      <ContentDiv>{children}</ContentDiv>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  background-color: ${({ theme }) => theme.background_color.fill};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentDiv = styled.div`
  max-width: 720px;
  width: 100%;
`;

export default Container;
