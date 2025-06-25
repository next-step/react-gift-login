import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function NavBar() {
  return (
    <NavBarWrapper>
      <ArrowBackIosNewIcon />
      <h3>선물하기</h3>
      <PersonOutlineIcon />
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export default NavBar;
