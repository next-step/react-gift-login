import styled from "@emotion/styled";

const Navigation = () => {
  return (
    <ContainerDiv>
      <NavDiv>
        <NavLeftDiv>
          <LinkA href="/">
            <LeftArrow />
          </LinkA>
        </NavLeftDiv>
        <NavCenterDiv>
          <LinkA href="/">선물하기</LinkA>
        </NavCenterDiv>
        <NavRightDiv>
          <LinkA href="/login">
            <Profile />
          </LinkA>
        </NavRightDiv>
      </NavDiv>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  background-color: ${({ theme }) => theme.background_color.default};
`;
const NavDiv = styled.nav`
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${({ theme }) => theme.typography.spacing1};
  padding: 0 5px;
`;
const NavLeftDiv = styled.div`
  margin-right: auto;
`;
const NavCenterDiv = styled.div`
  margin: 0 auto;
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const NavRightDiv = styled.div`
  margin-left: auto;
`;
const LinkA = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text_color.default};
`;
const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      stroke-width={1.8}
      fill="none"
      stroke="black"
    >
      <path d="M16 4 L8 12 L16 20" />
    </svg>
  );
};
const Profile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      stroke-width={1.8}
      fill="none"
      stroke="black"
    >
      <circle cx={12} cy={8} r={5}></circle>
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
};

export default Navigation;
