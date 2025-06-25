import BackIconSvg from './icons/back.svg';
import ProfileIconSvg from './icons/profile.svg';
import {
  IconButton,
  LeftIcon,
  NavigationSection,
  SectionTitle,
  ProfileIcon,
} from './NavigationBar.styles';

function NavigationBar() {
  return (
    <NavigationSection>
      <IconButton>
        <LeftIcon src={BackIconSvg} alt="뒤로가기" />
      </IconButton>
      <SectionTitle>선물하기</SectionTitle>
      <IconButton>
        <ProfileIcon src={ProfileIconSvg} alt="프로필" />
      </IconButton>
    </NavigationSection>
  );
}

export default NavigationBar;
