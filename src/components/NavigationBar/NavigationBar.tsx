import BackIconSvg from './icons/back.svg';
import ProfileIconSvg from './icons/profile.svg';
import {
  UnstyledButton,
  LeftIcon,
  NavigationSection,
  SectionTitle,
  ProfileIcon,
} from './NavigationBar.styles';
import { NAVIGATION_BAR_LABELS } from './constants/labels';
import { useLocation, useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavigationSection>
      <UnstyledButton onClick={() => navigate(-1)}>
        <LeftIcon src={BackIconSvg} alt={NAVIGATION_BAR_LABELS.BACK_BUTTON_ALT} />
      </UnstyledButton>
      <UnstyledButton onClick={() => navigate('/')}>
        <SectionTitle>{NAVIGATION_BAR_LABELS.SECTION_TITLE}</SectionTitle>
      </UnstyledButton>
      <UnstyledButton
        onClick={() =>
          // login 페이지에 이동할 때만 히스토리가 필요함
          navigate('/login', {
            state: {
              history: location.pathname,
            },
          })
        }
      >
        <ProfileIcon src={ProfileIconSvg} alt={NAVIGATION_BAR_LABELS.PROFILE_BUTTON_ALT} />
      </UnstyledButton>
    </NavigationSection>
  );
}

export default NavigationBar;
