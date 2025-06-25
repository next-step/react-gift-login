import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  background-color: ${({ theme }) => theme.background_color.fill};
  width: 100%;
  height: 100vh;
`;

const Container = ({ children }: any) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
