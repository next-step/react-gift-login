import styled from "@emotion/styled";
import LeftArrow from "@/components/icons/LeftArrow";
import Profile from "./icons/Profile";

const Navigation = () => {
  return (
    <Container>
      <Nav>
        <NavLeft>
          <LinkBtn href="/">
            <LeftArrow />
          </LinkBtn>
        </NavLeft>
        <NavCenter>
          <LinkBtn href="/">선물하기</LinkBtn>
        </NavCenter>
        <NavRight>
          <LinkBtn href="/login">
            <Profile />
          </LinkBtn>
        </NavRight>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  z-index: 999;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  max-width: 720px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  padding: 0 ${({ theme }) => theme.spacing.spacing1};
`;
const NavLeft = styled.div`
  margin-right: auto;
`;
const NavCenter = styled.div`
  margin: 0 auto;
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const NavRight = styled.div`
  margin-left: auto;
`;
const LinkBtn = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.textColor.default};
`;

export default Navigation;
