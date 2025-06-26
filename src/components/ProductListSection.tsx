import styled from '@emotion/styled'
import { useState } from 'react'
import { ProductItem } from '@/components/ProductItem'

const productMock = Array(21).fill({
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
})

export function ProductListSection() {
  const [showAll, setShowAll] = useState(false)

  const displayedProducts = showAll ? productMock : productMock.slice(0, 6)

  return (
    <SectionWrapper>
      <SectionTitle>실시간 급상승 선물랭킹</SectionTitle>

      <CategoryTabs>
        <span>🎁 전체</span>
        <span>👩 여성이</span>
        <span>👨 남성이</span>
        <span>🧒 청소년이</span>
      </CategoryTabs>

      <SubTab>
        <span>받고 싶어한</span>
        <span>많이 선물한</span>
        <span>위시로 받은</span>
      </SubTab>

      <ProductListWrapper>
        {displayedProducts.map((product, index) => (
          <ProductItem
            key={product.id + '-' + index}
            product={product}
            rank={index + 1}
          />
        ))}
      </ProductListWrapper>

      <ToggleButton onClick={() => setShowAll(!showAll)}>
        {showAll ? '접기' : '더보기'}
      </ToggleButton>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: 16px;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 12px;

  span {
    background: ${({ theme }) => theme.colors.blue100};
    padding: 6px 12px;
    border-radius: 16px;
  }
`

const SubTab = styled.div`
  background: ${({ theme }) => theme.colors.blue100};
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue800};
  margin-bottom: 16px;
  border-radius: 8px;
`

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`

const ToggleButton = styled.button`
  margin: 24px auto 40px;
  display: block;
  padding: 8px 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  background-color: white;
  color: black;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
`
