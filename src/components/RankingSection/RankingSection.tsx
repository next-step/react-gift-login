import { useState } from 'react';
import { rankingItems, genderItems, actionItems } from '../../data/ranking';
import * as S from './RankingSection.styles';

const RankingSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGender, setSelectedGender] = useState('ALL');
  const [selectedAction, setSelectedAction] = useState('받고 싶어한');

  return (
    <S.Section>
      <S.Title>실시간 급상승 선물랭킹</S.Title>
      
      <S.FilterContainer>
        <S.GenderFilterContainer>
          {genderItems.map(option => (
            <S.GenderButton key={option.key} onClick={() => setSelectedGender(option.key)}>
              <S.GenderIconContainer isSelected={selectedGender === option.key}>
                {option.icon}
              </S.GenderIconContainer>
              <S.GenderText isSelected={selectedGender === option.key}>
                {option.label}
              </S.GenderText>
            </S.GenderButton>
          ))}
        </S.GenderFilterContainer>
        
        <S.ActionFilterContainer>
          {actionItems.map(action => (
            <S.ActionButton 
              key={action} 
              isSelected={selectedAction === action}
              onClick={() => setSelectedAction(action)}
            >
              {action}
            </S.ActionButton>
          ))}
        </S.ActionFilterContainer>
      </S.FilterContainer>

      <S.Grid>
        {(isExpanded ? rankingItems : rankingItems.slice(0, 6)).map((item, index) => (
          <S.Item key={`${item.id}-${index}`}>
            <S.RankBadge rank={index + 1}>{index + 1}</S.RankBadge>
            <S.ItemImage src={item.imageURL} alt={item.name} />
            <S.BrandName>{item.brandInfo.name}</S.BrandName>
            <S.ProductName>{item.name}</S.ProductName>
            <S.Price>{item.price.sellingPrice.toLocaleString()} <span>원</span></S.Price>
          </S.Item>
        ))}
      </S.Grid>

      <S.MoreButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '접기' : '더보기'}
      </S.MoreButton>
    </S.Section>
  );
};

export default RankingSection; 