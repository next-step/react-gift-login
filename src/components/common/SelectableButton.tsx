import styled from '@emotion/styled';

interface SelectableButtonProps {
  label: string;
  icon?: string;
  isActive: boolean;
  onClick: () => void;
  size?: 'small' | 'medium';
  direction?: 'vertical' | 'horizontal';
}

export default function SelectableButton({
  label,
  icon,
  isActive,
  onClick,
  size = 'medium',
  direction = 'horizontal',
}: SelectableButtonProps) {
  return (
    <Button
      isActive={isActive}
      size={size}
      direction={direction}
      onClick={onClick}
    >
      {icon && <Icon>{icon}</Icon>}
      <Label isActive={isActive}>{label}</Label>
    </Button>
  );
}

const Button = styled.button<{
  isActive: boolean;
  size: 'small' | 'medium';
  direction: 'vertical' | 'horizontal';
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  align-items: center;
  gap: 4px;
  padding: ${({ size }) => (size === 'small' ? '6px 10px' : '8px 12px')};
  border-radius: 20px;
  border: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue500 : theme.colors.blue200};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.textDefault : theme.colors.gray800};
  cursor: pointer;
`;

const Icon = styled.span`
  font-size: 20px;
`;

const Label = styled.span<{ isActive: boolean }>`
  font-size: 12px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;
