import {useNavigate} from 'react-router-dom'
import styled from "@emotion/styled";
import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import myIcon from "../../assets/icons/my.svg";
import { ROUTE_PATH } from '@/routes/Router';
  const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing.spacing3};
    height: 2.75rem;
    background-color: ${({ theme }) => theme.colors.gray};
  `;
  const Button = styled.button`
    width: ${({ theme }) => theme.spacing.spacing7};
    height: ${({ theme }) => theme.spacing.spacing7};
  `;
  
  const Navbar = () => {
  const navigate = useNavigate();
  const handleLink =(path:string)=>{
    navigate(path);
  }
  const handleBackClick = () => {
    if (window.history.length <= 1) {
      navigate(ROUTE_PATH.HOME);
    } else {
      navigate(-1);
    }
  };
  return (
    <NavbarWrapper>
      <div>
        <Button
          onClick={handleBackClick
          }>
          <img src={arrowLeftIcon} alt="뒤로 가기" />
        </Button>
      </div>
      <div>선물하기</div>
      <div>
        <Button
          onClick={() => {
            handleLink(ROUTE_PATH.LOGIN);
          }}
        >
          <img src={myIcon} alt="마이페이지" />
        </Button>

      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
