import styled from "@emotion/styled";
import Back from "@/components/UI/Back";
import Logo from "@/components/UI/Logo";
import User from "@/components/UI/User";

const TheHeader = () => {
  return (
    <Header>
      <Back size={"28px"} />
      <Logo size={"150px"} />
      <User size={"24px"} />
    </Header>
  );
};

export default TheHeader;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.spacing2};
  height: 44px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;
