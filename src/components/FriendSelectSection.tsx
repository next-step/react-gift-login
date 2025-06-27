import styled from '@emotion/styled';

const Section = styled.section`
  box-sizing: border-box;
  height: 106px;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[3]}`};
  background-color: ${({ theme }) => theme.color.gray[200]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SelectButton = styled.button`
  width: 100%;
  height: 74px;
  border: none;
  background-color: ${({ theme }) => theme.color.semantic.background.default};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border-radius: 16px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.gray[200]};
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  color: ${({ theme }) => theme.color.gray[700]};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.yellow[600]};
`;

const ButtonText = styled.p`
  ${({ theme }) => theme.typography.body.body1Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const FriendSelectSection = () => {
  return (
    <Section>
      <SelectButton aria-label="선물할 친구 선택">
        <IconWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a3038"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </IconWrapper>
        <ButtonText>선물할 친구를 선택해 주세요.</ButtonText>
      </SelectButton>
    </Section>
  );
};

export default FriendSelectSection;
