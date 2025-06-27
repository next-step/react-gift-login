import BackIconSvg from './icons/back.svg';
import ProfileIconSvg from './icons/profile.svg';
import {
  IconButton,
  LeftIcon,
  NavigationSection,
  SectionTitle,
  ProfileIcon,
} from './NavigationBar.styles';
import { NAVIGATION_BAR_LABELS } from './constants/labels';

function NavigationBar() {
  return (
    <NavigationSection>
      <IconButton>
        <LeftIcon src={BackIconSvg} alt={NAVIGATION_BAR_LABELS.BACK_BUTTON_ALT} />
      </IconButton>
      <SectionTitle>{NAVIGATION_BAR_LABELS.SECTION_TITLE}</SectionTitle>
      <IconButton>
        <ProfileIcon src={ProfileIconSvg} alt={NAVIGATION_BAR_LABELS.PROFILE_BUTTON_ALT} />
      </IconButton>
    </NavigationSection>
  );
}

export default NavigationBar;
