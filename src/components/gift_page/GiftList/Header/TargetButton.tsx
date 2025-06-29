import type { TargetButtonType } from '@/types/button';
import styled from '@emotion/styled';

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3.1rem;
  height: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.blue100};
  border-radius: 1rem;
`;

const ClickedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.blue700};
  border-radius: 1rem;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.colors.gray700};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const ClickedText = styled.div`
  ${({ theme }) => theme.typography.label1Bold}
  color: ${({ theme }) => theme.colors.blue700};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

export const TargetButton = ({ type, isClicked, setCurrentTarget }: TargetButtonType) => {
  let icon = '?';
  let text = '?';
  const icons = ['ALL', '👩🏻', '👨🏻', '👦🏻'];
  const texts = ['전체', '여성이', '남성이', '청소년이'];

  if (type === 'All') {
    icon = icons[0];
    text = texts[0];
  } else if (type === 'Female') {
    icon = icons[1];
    text = texts[1];
  } else if (type === 'Male') {
    icon = icons[2];
    text = texts[2];
  } else if (type === 'Youth') {
    icon = icons[3];
    text = texts[3];
  }

  return (
    <Button
      onClick={() => {
        setCurrentTarget(type);
      }}
    >
      {isClicked ? (
        <ClickedIcon style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>{icon}</ClickedIcon>
      ) : (
        <Icon style={{ color: '#aacefd', fontSize: 14, fontWeight: 600 }}>{icon}</Icon>
      )}
      {isClicked ? <ClickedText>{text}</ClickedText> : <Text>{text}</Text>}
    </Button>
  );
};
