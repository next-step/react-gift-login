import styled from "@emotion/styled";
import { ChevronLeft, UserRound } from "lucide-react";

const Navbar = styled.nav(props => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "44px",
  backgroundColor: "rgb(255,255,255)",
  padding: `0 ${props.theme.spacing2}`,
  boxShadow: `0 1px ${props.theme.color.gray[200]}`,
}));

const NavbarIcon = styled.div({
  width: "28px",
  height: "28px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const NavbarTitle = styled.h1(props => ({
  fontSize: `${props.theme.typography.title1Bold.fontSize}`,
  fontWeight: `${props.theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${props.theme.typography.title1Bold.lineHeight}`,
  color: `${props.theme.color.gray[900]}`,
  margin: 0,
}));

const Header = () => {
  return (
    <Navbar>
      <NavbarIcon>
        <ChevronLeft />
      </NavbarIcon>
      <NavbarTitle>선물하기</NavbarTitle>
      <NavbarIcon>
        <UserRound />
      </NavbarIcon>
    </Navbar>
  );
};
export default Header;
