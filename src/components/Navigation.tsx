import styled from "@emotion/styled";
import LeftArrow from "@/components/icons/LeftArrow";
import Profile from "./icons/Profile";

const Navigation = () => {
  return (
    <ContainerDiv>
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
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
`;
const Nav = styled.nav`
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
