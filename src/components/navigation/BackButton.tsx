import styled from '@emotion/styled';

const BackButtonWrapper = styled.button`
  background: none;
  border: none;
  padding: ${(props) => props.theme.spacing.spacing3};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px; /* 터치 친화적 최소 크기 */
  min-height: 44px;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.semanticColors.background.fill};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.gray200};
  }
`;

const BackIcon = styled.span`
  font-size: ${(props) => props.theme.typography.title2Bold.fontSize};
  color: ${(props) => props.theme.semanticColors.text.default};
  line-height: 1;
`;

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <BackButtonWrapper onClick={onClick} aria-label="뒤로가기">
      <BackIcon>&lt;</BackIcon>
    </BackButtonWrapper>
  );
};

export default BackButton;
