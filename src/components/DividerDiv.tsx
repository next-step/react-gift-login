import styled from "@emotion/styled";

const DividerDiv = () => {
  return <Divider />;
};

const Divider = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
`;

export default DividerDiv;
