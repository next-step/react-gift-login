import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${props => props.theme.semanticColors.kakaoYellow};
  color: ${props => props.theme.colors.gray900};
  border: none;
  padding: ${props => props.theme.spacing.spacing3} ${props => props.theme.spacing.spacing6};
  border-radius: 6px;
  font-size: ${props => props.theme.typography.body2Regular.fontSize};
  font-weight: ${props => props.theme.typography.body2Bold.fontWeight};
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Pretendard', sans-serif;

  &:hover {
    background-color: ${props => props.theme.semanticColors.kakaoYellowHover};
  }

  &:active {
    background-color: ${props => props.theme.semanticColors.kakaoYellowActive};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.gray600};
  color: ${props => props.theme.colors.gray00};

  &:hover {
    background-color: ${props => props.theme.colors.gray700};
  }

  &:active {
    background-color: ${props => props.theme.colors.gray800};
  }
`;
