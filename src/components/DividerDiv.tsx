import styled from "@emotion/styled";

const Divider = styled.div`
  width: 100%;
  height: 24px;
  background-color: ${({ theme }) => theme.background_color.default};
`;

const DividerDiv = () => {
  return <Divider />;
};

export default DividerDiv;
