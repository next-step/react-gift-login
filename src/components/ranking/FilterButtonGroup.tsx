import React from 'react';
import styled from '@emotion/styled';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterButtonGroupProps {
  type: 'target' | 'rank';
  options: FilterOption[];
  selected: string;
  onChange: (value: string) => void;
}

const FilterContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.spacing2};
  margin-bottom: ${props => props.theme.spacing.spacing4};
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  padding: ${props => props.theme.spacing.spacing2} ${props => props.theme.spacing.spacing4};
  border-radius: 20px;
  border: 1px solid ${props => props.isActive ? props.theme.semanticColors.kakaoYellow : props.theme.colors.gray300};
  background-color: ${props => props.isActive ? props.theme.semanticColors.kakaoYellow : 'white'};
  color: ${props => props.isActive ? props.theme.colors.gray900 : props.theme.colors.gray600};
  font-size: ${props => props.theme.typography.body2Regular.fontSize};
  font-weight: ${props => props.isActive ? 600 : 400};
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 36px;
  
  &:hover {
    background-color: ${props => props.isActive ? props.theme.semanticColors.kakaoYellowHover : props.theme.colors.gray100};
    border-color: ${props => props.isActive ? props.theme.semanticColors.kakaoYellowHover : props.theme.colors.gray400};
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({ 
  type, 
  options, 
  selected, 
  onChange 
}) => {
  return (
    <FilterContainer>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          isActive={selected === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default FilterButtonGroup; 