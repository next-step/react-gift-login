import styled from "@emotion/styled";
import type React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Style>
      <Content>{children}</Content>
    </Style>
  );
};

const Style = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.fill};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  max-width: 720px;
  width: 100%;
`;

export default Container;
