import styled from '@emotion/styled';

interface AgeSelectButtonProps {
  ageType: string;
  label: string;
  emoji: string;
  selected?: boolean;
  onClick: (ageType: string) => void; 
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4px;
`
const Button = styled.button<{ selected?: boolean }>`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 20px;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.blue700 : theme.colors.blue100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background 0.2s;
`;

const Emoji = styled.span`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  margin-bottom: 4px;
`;

const Label = styled.span<{ selected?: boolean }>`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ selected, theme }) =>
    selected ? theme.typography.body2Bold.fontWeight : theme.typography.body2Regular.fontWeight};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.blue700 : theme.colors.gray700};
`;

function AgeSelectButton({ ageType, label, emoji, selected, onClick }: AgeSelectButtonProps) {
  return (
    <ButtonWrapper>
      <Button selected={selected} onClick={() => onClick(ageType)}>
        <Emoji>{emoji}</Emoji>
      </Button>
      <Label selected={selected}>{label}</Label>
    </ButtonWrapper>
  );
}

export default AgeSelectButton;
