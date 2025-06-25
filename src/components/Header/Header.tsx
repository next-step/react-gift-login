import styled from '@emotion/styled';
import { colors, typography, spacing } from '@/styles/tokens';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${colors.white};
  padding: ${spacing.lg} ${spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray200};
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: ${typography.fontSize.lg};
  color: ${colors.gray700};
  cursor: pointer;
  padding: ${spacing.sm};
`;

const Title = styled.h1`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.gray900};
  margin: 0;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  font-size: ${typography.fontSize.lg};
  color: ${colors.gray700};
  cursor: pointer;
  padding: ${spacing.sm};
`;

interface HeaderProps {
  title: string;
  onBackClick?: () => void;
  onProfileClick?: () => void;
}

export const Header = ({ title, onBackClick, onProfileClick }: HeaderProps) => {
  return (
    <HeaderContainer>
      <BackButton onClick={onBackClick}>&#8249;</BackButton>
      <Title>{title}</Title>
      <ProfileButton onClick={onProfileClick}>&#128100;</ProfileButton>
    </HeaderContainer>
  );
};
