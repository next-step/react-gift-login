import styled from '@emotion/styled';

const ItemWrapper = styled.button`
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.spacing3};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80px; /* 터치 친화적 최소 높이 */
  border-radius: 12px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.semanticColors.background.fill};
  }
  
  &:active {
    background-color: ${props => props.theme.colors.gray200};
    transform: scale(0.98);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.semanticColors.background.fill};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.spacing2};
  overflow: hidden;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const IconEmoji = styled.span`
  font-size: 24px;
  line-height: 1;
`;

const Label = styled.span`
  font-size: ${props => props.theme.typography.label2Regular.fontSize};
  font-weight: ${props => props.theme.typography.label2Regular.fontWeight};
  line-height: ${props => props.theme.typography.label2Regular.lineHeight};
  color: ${props => props.theme.semanticColors.text.default};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

interface CategoryItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const CategoryItem = ({ icon, label, onClick }: CategoryItemProps) => {
  // 이미지 URL인지 이모지인지 판단
  const isImageUrl = icon.startsWith('http');

  return (
    <ItemWrapper onClick={onClick} aria-label={`${label} 카테고리`}>
      <IconWrapper>
        {isImageUrl ? (
          <IconImage src={icon} alt={label} />
        ) : (
          <IconEmoji>{icon}</IconEmoji>
        )}
      </IconWrapper>
      <Label>{label}</Label>
    </ItemWrapper>
  );
};

export default CategoryItem; 