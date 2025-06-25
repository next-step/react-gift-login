import BackIconSvg from './icons/back.svg';
import ProfileIconSvg from './icons/profile.svg';
import {
  IconButton,
  LeftIcon,
  NavigationContainer,
  ProfileIcon,
  Title,
} from './NavigationBar.styles';

function NavigationBar() {
  return (
    <NavigationContainer>
      <IconButton>
        <LeftIcon src={BackIconSvg} alt="뒤로가기" />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton>
        <ProfileIcon src={ProfileIconSvg} alt="프로필" />
      </IconButton>
    </NavigationContainer>
  );
}

export default NavigationBar;
