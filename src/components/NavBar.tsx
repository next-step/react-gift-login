import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <NavBarWrapper>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackIosNewIcon />
      </Button>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <h3>선물하기</h3>
      </Button>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        <PersonOutlineIcon />
      </Button>
    </NavBarWrapper>
  );
}

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

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
