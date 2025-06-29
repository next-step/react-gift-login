import styled from '@emotion/styled'
import { useState } from 'react'
import { productMockData } from '@/mocks/products'

const genderTabs = ['전체', '여성이', '남성이', '청소년이']
const rankTabs = ['받고 싶어한', '많이 선물한', '위시로 받은']
// TODO : 임시 하드코딩. 추후 개수 변경 가능
const initCount = 6
const fullCount = 12

const SectionWrapper = styled.section`
  margin-top: ${({ theme }) => theme.spacing.spacing6};
`

const Title = styled.h2`
  ${({ theme }) => theme.typography.subtitle1Bold};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`

const UserGroupTab = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`

const UserTab = styled.button<{ isSelected: boolean }>`
  flex: 1;
  padding: 8px 0;
  border-radius: 12px;
  background-color: ${({ isSelected }) => (isSelected ? '#597EF7' : '#f4f6fa')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#555')};
  font-weight: 500;
  text-align: center;
  .all {
    display: block;
    font-size: 12px;
    font-weight: bold;
  }
`

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto 4px;
`

const TrendGroupTab = styled.div`
  display: flex;
  background-color: #f7f9fc;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 16px;
`

const TrendTab = styled.button<{ isSelected: boolean }>`
  flex: 1;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? '#3558e1' : '#a1a7b3')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`

const ProductCard = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 8px;
  img {
    width: 100%;
  }
`

const Badge = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: ${({ theme }) => theme.colors.red.red600};
  color: #fff;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 12px;
`

const Brand = styled.div`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray.gray700};
  padding: 4px 8px 0;
`

const Name = styled.div`
  ${({ theme }) => theme.typography.label1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  padding: 0 8px;
`

const Price = styled.div`
  ${({ theme }) => theme.typography.body2Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  padding: 4px 8px;
`

const ToggleButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  border-radius: 8px;
  background-color: #fff;
  text-align : center;
  font-weight: 500;
  cursor: pointer;
`

const RankingSection = () => {
  const [selectedGender, setSelectedGender] = useState('남성이')
  const [selectedRank, setSelectedRank] = useState('많이 선물한')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  const visibleCount = isExpanded ? fullCount : initCount
  const productList = Array.from({ length: fullCount }, (_, i) => ({
    ...productMockData[0],
    id: productMockData[0].id + i,
  }))

  return (
    <SectionWrapper>
      <Title>실시간 급상승 선물랭킹</Title>

      <UserGroupTab>
        {genderTabs.map((tab) => (
          <UserTab
            key={tab}
            isSelected={selectedGender === tab}
            onClick={() => setSelectedGender(tab)}
          >
            {tab === '전체' ? <span className="all">ALL</span> : <Avatar />}
            <span>{tab}</span>
          </UserTab>
        ))}
      </UserGroupTab>

      <TrendGroupTab>
        {rankTabs.map((tab) => (
          <TrendTab
            key={tab}
            isSelected={selectedRank === tab}
            onClick={() => setSelectedRank(tab)}
          >
            {tab}
          </TrendTab>
        ))}
      </TrendGroupTab>

      <ProductGrid>
        {productList.slice(0, visibleCount).map((item, idx) => (
          <ProductCard key={item.id}>
            <Badge>{idx + 1}</Badge>
            <img src={item.imageURL} alt={item.name} />
            <Brand>{item.brandInfo.name}</Brand>
            <Name>{item.name}</Name>
            <Price>
              <strong>{item.price.sellingPrice.toLocaleString()}</strong> 원
            </Price>
          </ProductCard>
        ))}
      </ProductGrid>

      <ToggleButton onClick={handleToggle}>
        {isExpanded ? '접기' : '더보기'}
      </ToggleButton>
    </SectionWrapper>
  )
}

export default RankingSection

