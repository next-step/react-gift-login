import leftArrow from '@/assets/left-arrow.svg';
import user from '@/assets/user.svg';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderWrapper, StyledLink, Title, Icon } from '@/components/Header/Header.styles';

export default function Header() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <HeaderWrapper>
      <Icon src={leftArrow} alt="left arrow" onClick={handleBack}/>
      <Title><StyledLink to="/">선물하기</StyledLink></Title>
      <Link to="/login"><Icon src={user} alt="user" /></Link>
    </HeaderWrapper>
  );
}
