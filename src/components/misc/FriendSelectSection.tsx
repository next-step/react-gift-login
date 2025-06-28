import styled from '@emotion/styled';

const SectionWrapper = styled.div`
  background-color: ${(props) => props.theme.semanticColors.background.fill};
  padding: ${(props) => props.theme.spacing.spacing4};
  margin-bottom: ${(props) => props.theme.spacing.spacing2};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing3};
`;

const PlusButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.semanticColors.kakaoYellow};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.semanticColors.kakaoYellowHover};
  }

  &:active {
    background-color: ${(props) =>
      props.theme.semanticColors.kakaoYellowActive};
    transform: scale(0.98);
  }
`;

const PlusIcon = styled.span`
  color: ${(props) => props.theme.colors.gray900};
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`;

const SelectText = styled.span`
  font-size: ${(props) => props.theme.typography.body2Regular.fontSize};
  font-weight: ${(props) => props.theme.typography.body2Regular.fontWeight};
  line-height: ${(props) => props.theme.typography.body2Regular.lineHeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  font-family: 'Pretendard', sans-serif;
`;

interface FriendSelectSectionProps {
  onSelectFriend?: () => void;
}

const FriendSelectSection = ({ onSelectFriend }: FriendSelectSectionProps) => {
  return (
    <SectionWrapper>
      <ContentContainer>
        <PlusButton onClick={onSelectFriend} aria-label="친구 선택">
          <PlusIcon>+</PlusIcon>
        </PlusButton>
        <SelectText>선물할 친구를 선택해 주세요.</SelectText>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default FriendSelectSection;
