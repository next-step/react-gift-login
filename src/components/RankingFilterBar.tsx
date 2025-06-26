// src/components/RankingFilterBar.tsx
import { useState } from 'react'
import styled from '@emotion/styled'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'

const FilterBarWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const GenderToggleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 127px;
  padding: 0 16px;
  margin-bottom: 1rem;
`

const GenderButton = styled.button<{ selected: boolean }>`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: ${({ selected }) =>
    selected ? colors.blue[700] : colors.gray[100]};
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? colors.blue[700] : colors.gray[200]};
  }
`

const GenderIcon = styled.span`
  font-size: 1.5rem;
`

const GenderText = styled.span<{ selected: boolean }>`
  ${typography.label1Regular};
  margin-top: 4px;
  color: ${({ selected }) =>
    selected ? colors.blue[700] : colors.gray[900]};
`

const SortTabsWrapper = styled.div`
  display: flex;
  background-color: ${colors.gray[100]};
  border-radius: 8px;
  overflow: hidden;
`

const SortTab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px 0;
  background-color: ${({ active }) => (active ? colors.gray[0] : 'transparent')};
  border: none;
  cursor: pointer;
  ${typography.body1Regular};
  color: ${({ active }) => (active ? colors.blue[700] : colors.gray[900])};

  &:not(:last-of-type) {
    border-right: 1px solid ${colors.gray[300]};
  }
`

export interface RankingFilterBarProps {
  genders?: { key: string; label: string; icon: React.ReactNode }[]
  sorts?: { key: string; label: string }[]
  onGenderChange?: (key: string) => void
  onSortChange?: (key: string) => void
}

export function RankingFilterBar({
  genders = [
    { key: 'all', label: '전체', icon: 'ALL' },
    { key: 'female', label: '여성이', icon: '👩🏻' },
    { key: 'male', label: '남성이', icon: '👨🏻' },
    { key: 'teen', label: '청소년이', icon: '👦🏻' },
  ],
  sorts = [
    { key: 'wanted', label: '받고 싶어한' },
    { key: 'sent', label: '많이 선물한' },
    { key: 'wished', label: '위시로 받은' },
  ],
  onGenderChange,
  onSortChange,
}: RankingFilterBarProps) {
  const [selectedGender, setSelectedGender] = useState(genders[0].key)
  const [selectedSort, setSelectedSort] = useState(sorts[0].key)

  return (
    <FilterBarWrapper>
      <GenderToggleWrapper>
        {genders.map((g) => {
          const isSelected = g.key === selectedGender
          return (
            <GenderButton
              key={g.key}
              selected={isSelected}
              onClick={() => {
                setSelectedGender(g.key)
                onGenderChange?.(g.key)
              }}
            >
              <GenderIcon aria-hidden="true">{g.icon}</GenderIcon>
              <GenderText selected={isSelected}>{g.label}</GenderText>
            </GenderButton>
          )
        })}
      </GenderToggleWrapper>

      <SortTabsWrapper>
        {sorts.map((s) => {
          const isActive = s.key === selectedSort
          return (
            <SortTab
              key={s.key}
              active={isActive}
              onClick={() => {
                setSelectedSort(s.key)
                onSortChange?.(s.key)
              }}
            >
              {s.label}
            </SortTab>
          )
        })}
      </SortTabsWrapper>
    </FilterBarWrapper>
  )
}

export default RankingFilterBar
