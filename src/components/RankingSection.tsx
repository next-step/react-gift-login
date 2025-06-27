import { useState } from 'react';
import { rankingItems, genderItems, actionItems } from '../data/ranking';
import styled from '@emotion/styled';
//컴포넌트의 가독성을 좋게 하기 위해 styled방식으로 바꾸었습니다.

const RankingSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGender, setSelectedGender] = useState('ALL');
  const [selectedAction, setSelectedAction] = useState('받고 싶어한');

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      
      <FilterContainer>
        <GenderFilterContainer>
          {genderItems.map(option => (
            <GenderButton key={option.key} onClick={() => setSelectedGender(option.key)}>
              <GenderIconContainer isSelected={selectedGender === option.key}>
                {option.icon}
              </GenderIconContainer>
              <GenderText isSelected={selectedGender === option.key}>
                {option.label}
              </GenderText>
            </GenderButton>
          ))}
        </GenderFilterContainer>
        
        <ActionFilterContainer>
          {actionItems.map(action => (
            <ActionButton 
              key={action} 
              isSelected={selectedAction === action}
              onClick={() => setSelectedAction(action)}
            >
              {action}
            </ActionButton>
          ))}
        </ActionFilterContainer>
      </FilterContainer>

      <Grid>
        {(isExpanded ? rankingItems : rankingItems.slice(0, 6)).map((item, index) => (
          <Item key={`${item.id}-${index}`}>
            <RankBadge rank={index + 1}>{index + 1}</RankBadge>
            <ItemImage src={item.imageURL} alt={item.name} />
            <BrandName>{item.brandInfo.name}</BrandName>
            <ProductName>{item.name}</ProductName>
            <Price>{item.price.sellingPrice.toLocaleString()} <span>원</span></Price>
          </Item>
        ))}
      </Grid>

      <MoreButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '접기' : '더보기'}
      </MoreButton>
    </Section>
  );
};
export default RankingSection;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.title1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const FilterContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const GenderFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const ActionFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 10px;
`;

const BaseButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const ActionButton = styled(BaseButton)<{ isSelected: boolean }>`
  margin: 0;
  text-align: left;
  ${({ theme, isSelected }) => isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
`;

const GenderButton = styled(BaseButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GenderIconContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
  ${({ theme }) => theme.typography.label1Bold}
  background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[700] : theme.colors.blue[100]};
  border-radius: 15px;
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[200] : theme.colors.blue[400]};
`;

const GenderText = styled.p<{ isSelected: boolean }>`
  margin: 0;
  text-align: left;
  ${({ theme, isSelected }) => isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => theme.spacing.spacing2};
  row-gap: ${({ theme }) => theme.spacing.spacing7};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

const RankBadge = styled.span<{ rank: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme, rank }) => rank <= 3 ? theme.colors.red[600] : theme.colors.gray[600]};
  border-radius: 4px;
  ${({ theme }) => theme.typography.label2Bold}
  color: white;
  z-index: 1;
`;

const ItemImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
  object-fit: cover;
`;

const BrandName = styled.p`
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const ProductName = styled.h6`
  ${({ theme }) => theme.typography.body2Regular}
  margin: 0;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.p`
  ${({ theme }) => theme.typography.title2Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin: 0;
  text-align: left;
  word-break: break-word;
`;

const MoreButton = styled.button`
  width: 70%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  ${({ theme }) => theme.typography.body2Regular}
  color: ${({ theme }) => theme.semantic.text.default};
  display: block;
  margin: ${({ theme }) => theme.spacing.spacing10} auto ${({ theme }) => theme.spacing.spacing8};
`;
