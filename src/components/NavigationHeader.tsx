import styled from '@emotion/styled';
import { ChevronLeft, User } from 'lucide-react';

interface NavigationHeaderProps {
  title: string;
  onBackClick?: () => void;
  onProfileClick?: () => void;
  showBackButton?: boolean;
  showProfileButton?: boolean;
}

const HeaderContainer = styled.header(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.spacing1} ${theme.spacing.spacing4};
  background-color: ${theme.colors.default};
  position: relative;
`
);

interface SideContainerProps {
  position: 'left' | 'right';
}

const SideContainer = styled.div<SideContainerProps>`
  display: flex;
  align-items: center;
  width: 48px;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'flex-end'};
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1(
  ({ theme }) => `
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  line-height: ${theme.typography.title1Bold.lineHeight};
  color: ${theme.colors.gray1000};
  margin: 0;
`
);

const IconButton = styled.button(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${theme.colors.gray100};
  }
  &:active {
    background-color: ${theme.colors.gray200};
  }
  svg {
    width: 27px;
    height: 27px;
    color: ${theme.colors.gray1000};
  }
`
);

export function NavigationHeader({
  title,
  onBackClick,
  onProfileClick,
  showBackButton = true,
  showProfileButton = true,
}: NavigationHeaderProps) {
  return (
    <HeaderContainer>
      {/* Left side - Back button */}
      <SideContainer position="left">
        {showBackButton && (
          <IconButton onClick={onBackClick} type="button">
            <ChevronLeft />
          </IconButton>
        )}
      </SideContainer>
      {/* Center - Title */}
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {/* Right side - Profile button */}
      <SideContainer position="right">
        {showProfileButton && (
          <IconButton onClick={onProfileClick} type="button">
            <User />
          </IconButton>
        )}
      </SideContainer>
    </HeaderContainer>
  );
}
