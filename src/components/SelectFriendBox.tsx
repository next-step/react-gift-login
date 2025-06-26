import styled from "@emotion/styled";

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) =>
    `${theme.spacing.spacing4} ${theme.spacing.spacing3}`};
  padding: ${({ theme }) => theme.spacing.spacing4};
  gap: ${({ theme }) => theme.spacing.spacing3};
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  cursor: pointer;
`;

const PlusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
`;

const PlusSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

const SelectText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;

const SelectFriendBox = () => {
  return (
    <Box>
      <PlusDiv>
        <PlusSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2a3038"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </PlusSvg>
      </PlusDiv>
      <SelectText>선물할 친구를 선택해 주세요.</SelectText>
    </Box>
  );
};

export default SelectFriendBox;
