import React, { useState } from 'react'
import styled from '@emotion/styled'
import PersonIcon from '@mui/icons-material/Person'

const filters = [
  { key: 'all', label: '전체', icon: null },
  { key: 'female', label: '여성', icon: <PersonIcon style={{fontSize: 28}} /> },
  { key: 'male', label: '남성', icon: <PersonIcon style={{fontSize: 28}} /> },
  { key: 'teen', label: '청소년', icon: <PersonIcon style={{fontSize: 28}} /> },
]

const rankingData = Array(3).fill({
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

const Section = styled.section`
  width: 100%;
  margin: 40px 0 0 0;
`

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 18px;
  text-align: left;
`

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 18px;
  justify-content: center;
`

const FilterBtn = styled.button<{active?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({active}) => active ? '#4b6cff' : '#f5f6fa'};
  color: ${({active}) => active ? '#fff' : '#222'};
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: none;
  margin-bottom: 4px;
`

const FilterLabel = styled.span`
  font-size: 0.95rem;
  color: #222;
  margin-top: 2px;
`

const TabRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f5f7fb;
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 0 0;
  height: 48px;
  overflow: hidden;
`

const TabBtn = styled.button<{active?: boolean}>`
  flex: 1;
  height: 100%;
  background: ${({active}) => active ? '#eaf0ff' : 'transparent'};
  color: ${({active}) => active ? '#4b6cff' : '#b0b8c1'};
  border: none;
  font-size: 1.08rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 16px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  padding: 18px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

const RankBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #ff6f61;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 2px 10px;
  z-index: 2;
`

const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  object-fit: cover;
  background: #f6f6f6;
  margin-bottom: 14px;
`

const Brand = styled.div`
  font-size: 0.95rem;
  color: #b0b8c1;
  font-weight: 700;
  margin-bottom: 2px;
`

const ProductName = styled.div`
  font-size: 1.08rem;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  margin-bottom: 6px;
  word-break: keep-all;
`

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  margin-top: 2px;
`

const MoreBtn = styled.button`
  display: block;
  margin: 0 auto 0 auto;
  background: #f5f6fa;
  color: #4b6cff;
  border: none;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 12px 36px;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s;
  &:hover {
    background: #eaf0ff;
  }
`

const RankingSection = () => {
  const [selected, setSelected] = useState('all')

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <FilterRow>
        {filters.map(f => (
          <FilterBtn
            key={f.key}
            active={selected === f.key}
            onClick={() => setSelected(f.key)}
          >
            {f.icon}
            <FilterLabel>{f.label}</FilterLabel>
          </FilterBtn>
        ))}
      </FilterRow>
      <TabRow>
        <TabBtn active>받고 싶어한</TabBtn>
        <TabBtn>많이 선물한</TabBtn>
        <TabBtn>위시로 받은</TabBtn>
      </TabRow>
      <Grid>
        {rankingData.map((item) => (
          <Card key={item.id}>
            <RankBadge>{item.id}</RankBadge>
            <ProductImg src={item.imageURL} alt={item.name} />
            <Brand>{item.brandInfo.name}</Brand>
            <ProductName>{item.name}</ProductName>
            <Price>{item.price.sellingPrice.toLocaleString()} 원</Price>
          </Card>
        ))}
      </Grid>
      <MoreBtn>더보기</MoreBtn>
    </Section>
  )
}

export default RankingSection