import styled from '@emotion/styled';
import arrowLeftIcon from '../../assets/icons/arrow_left.svg';
import myIcon from '../../assets/icons/my.svg';
const Navbar = () => {
  const NavbarWrapper = styled.nav`
  display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${({theme})=>theme.spacing.spacing3};
        height: 2.75rem;
        background-color: ${({theme})=>theme.colors.gray};`
  const PreviousButton = styled.button`
    width: ${({ theme }) => theme.spacing.spacing7};
    height: ${({ theme }) => theme.spacing.spacing7};
  `;
  return (
    <NavbarWrapper>
      <div>
        <PreviousButton><img src={arrowLeftIcon} alt="" /></PreviousButton>
      </div>
      <div>선물하기</div>
      <div>
        <img src={myIcon} alt="" />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
