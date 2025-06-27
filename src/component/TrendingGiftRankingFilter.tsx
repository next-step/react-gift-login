import * as S from '@/component/TrendingGiftRanking.styles'

export const FilterGender: React.FC<{
  icon: string
  label: string
  isActive: boolean
  onClick: (label: string) => void
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <S.GenderItem onClick={() => onClick(label)}>
      <S.GenderButton isActive={isActive}>{icon}</S.GenderButton>
      <S.GenderLabel isActive={isActive}>{label}</S.GenderLabel>
    </S.GenderItem>
  )
}

export const FilterType: React.FC<{
  label: string
  isActive: boolean
  onClick: (label: string) => void
}> = ({ label, isActive, onClick }) => {
  return (
    <S.TypeButton isActive={isActive} onClick={() => onClick(label)}>
      {label}
    </S.TypeButton>
  )
}
