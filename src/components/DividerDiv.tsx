import styled from "@emotion/styled";

const DividerDiv = () => {
  return <Divider />;
};

const Divider = styled.div`
  width: 100%;
  height: 24px;
  background-color: ${({ theme }) => theme.background_color.default};
`;

export default DividerDiv;
