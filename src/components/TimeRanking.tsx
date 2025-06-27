import styled from '@emotion/styled'
import { useState } from 'react'
import { ranking } from '@/data/ranking'

const genderOptions = [
  { label: 'ALL', icon: 'ALL', value: 'ALL' },
  { label: '여성이', icon: '👩🏻', value: '여성' },
  { label: '남성이', icon: '👨🏻', value: '남성' },
  { label: '청소년이', icon: '🧒🏻', value: '청소년' },
]

const rankTypeTabs = ['받고 싶어한', '많이 선물한', '위시로 받은']

export default function TimeRanking() {
  const [selectedGender, setSelectedGender] = useState('ALL')
  const [selectedRankType, setSelectedRankType] = useState('받고 싶어한')

  const filteredRanking = ranking.filter((item) => {
    return true
  })

  return (
    <Container>
      <Block />
      <Title>실시간 급상승 선물랭킹</Title>
      <SmallBlock />

      <GenderBox>
        {genderOptions.map(({ label, icon, value }) => (
          <GenderTab key={value}>
            <GenderButton
              isSelected={selectedGender === value}
              onClick={() => setSelectedGender(value)}
            >
              {icon}
            </GenderButton>
            <GenderText>{label}</GenderText>
          </GenderTab>
        ))}
      </GenderBox>

      <UndergenderandrankingBox />

      <RankingBox>
        {rankTypeTabs.map((tab) => (
          <RankingTab 
            key={tab}
            isSelected={selectedRankType === tab}
            onClick={() => setSelectedRankType(tab)}
          >
            {tab}
          </RankingTab>
        ))}
      </RankingBox>

      <UndergenderandrankingBox />

      <CardGrid>
        {filteredRanking.map((item, index) => (
          <Card key={item.id}>
            <RankLabel>{index + 1}</RankLabel>
            <Image src={item.imageURL} alt={item.name} />
            <UnderimageBox />
            <Brand>{item.brandInfo.name}</Brand>
            <Name>{item.name}</Name>
            <Price>{item.price.sellingPrice.toLocaleString()}원</Price>
          </Card>
        ))}
      </CardGrid>
    </Container>
  )
}


const Block = styled.div`
  width: 100%;
  height: 40px;
`

const Container = styled.section`
  padding: 0 16px;
`

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1Bold};
  margin: 0;
`

const SmallBlock = styled.div`
  height: 20px;
`

const GenderBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

const GenderTab = styled.div`
  width: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

const GenderButton = styled.button<{ isSelected: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray.white : theme.colors.blue[400]};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[100]};
  ${({ theme }) => theme.typography.subtitle2Bold};
`

const GenderText = styled.p`
  margin: 0;
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: left;
  display: block;
  unicode-bidi: isolate;
`

const UndergenderandrankingBox = styled.div`
  width: 100%;
  height: 16px;
  background-color: transparent;
`

const RankingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 8px;
  padding: 12px 16px;
`

const RankingTab = styled.button<{ isSelected: boolean }>`
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  ${({ theme, isSelected }) =>
    isSelected ? theme.typography.label1Bold : theme.typography.label1Regular};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[400]};
`

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`

const Card = styled.div`
  width: 100%;
  position: relative;
`

const RankLabel = styled.div`
  position: absolute;
  z-index: 2;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.label2Bold};
  top: 0.25rem;
  left: 0.25rem;
  color: ${({ theme }) => theme.colors.text.default};
  background-color: ${({ theme }) => theme.colors.red[600]};
`

const Image = styled.img`
  width: 100%;
  display: block;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  overflow: hidden;
`

const UnderimageBox = styled.div`
  width: 100%;
  height: 12px;
  background-color: transparent;
`

const Brand = styled.p`
  margin: 0;
  text-align: left;
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[600]};
`

const Name = styled.p`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Price = styled.p`
  margin-top: 4px;
  ${({ theme }) => theme.typography.subtitle1Bold};
  text-align: left;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.gray[900]};
`
