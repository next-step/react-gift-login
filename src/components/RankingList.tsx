import React, { useState } from 'react'
import styled from '@emotion/styled'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'
import LoadMoreButton from './LoadMoreButton'
import { useLoadMore } from '@/hooks/useLoadMore'

export interface Product {
  id: number
  name: string
  imageURL: string
  price: {
    basicPrice: number
    discountRate: number
    sellingPrice: number
  }
  brandInfo: {
    id: number
    name: string
    imageURL: string
  }
}

export const mockItem: Product = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
}

export const defaultProducts: Product[] = Array(6).fill(mockItem)

export const fetchMoreProducts = async (): Promise<Product[]> => {
  await new Promise((r) => setTimeout(r, 500))
  return Array(15).fill(mockItem)
}

export interface RankingListProps {
  initialProducts?: Product[]
  fetchMore?: () => Promise<Product[]>
}

const RankingList: React.FC<RankingListProps> = ({
  initialProducts = defaultProducts,
  fetchMore,
}) => {
  const { items, loadMore, loading, loaded } = useLoadMore<Product>(
    initialProducts,
    fetchMore,
  )
  const [expanded, setExpanded] = useState(false)

  const visibleItems = expanded ? items : items.slice(0, 6)

  const handleToggle = async () => {
    if (!expanded && fetchMore && !loaded) {
      await loadMore()
    }
    setExpanded((prev) => !prev)
  }

  return (
    <Wrapper>
      <GridContainer>
        {visibleItems.map((prod, idx) => (
          <RankingItem key={prod.id} rank={idx + 1} product={prod} />
        ))}
      </GridContainer>
      {fetchMore && (
        <ButtonWrap>
          <LoadMoreButton onClick={handleToggle} disabled={loading}>
            {loading ? '로딩중...' : expanded ? '접기' : '더보기'}
          </LoadMoreButton>
        </ButtonWrap>
      )}
    </Wrapper>
  )
}

interface RankingItemProps {
  rank: number
  product: Product
}

const RankingItem: React.FC<RankingItemProps> = ({ rank, product }) => (
  <Card>
    <Badge rank={rank}>{rank}</Badge>
    <Image src={product.imageURL} alt={product.name} />
    <Brand>{product.brandInfo.name}</Brand>
    <Title>{product.name}</Title>
    <Price>
      {product.price.sellingPrice.toLocaleString()} <span>원</span>
    </Price>
  </Card>
)

const Wrapper = styled.div`
  padding: 0 ${spacing.spacing4};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.spacing4};
`

const ButtonWrap = styled.div`
  margin-top: ${spacing.spacing4};
`

const Card = styled.div`
  position: relative;
  background: ${colors.background.default};
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
`

const Badge = styled.div<{ rank: number }>`
  position: absolute;
  top: ${spacing.spacing2};
  left: ${spacing.spacing2};
  background: ${({ rank }) =>
    rank <= 3 ? colors.red[700] : colors.gray[800]};
  color: ${({ rank }) =>
    rank <= 3 ? colors.gray[0] : colors.gray[100]};
  font-size: ${typography.label2Bold.fontSize};
  font-weight: ${typography.label2Bold.fontWeight};
  line-height: ${typography.label2Bold.lineHeight};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`

const Brand = styled.p`
  margin: ${spacing.spacing2} 0 ${spacing.spacing1};
  line-height: ${typography.label2Regular.lineHeight};
  color: ${colors.text.sub};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Title = styled.h6`
  margin: 0;
  font-size: ${typography.subtitle2Bold.fontSize};
  font-weight: ${typography.subtitle2Bold.fontWeight};
  line-height: ${typography.subtitle2Bold.lineHeight};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Price = styled.p`
  margin: ${spacing.spacing1} 0 ${spacing.spacing3};
  font-size: ${typography.body1Bold.fontSize};
  font-weight: ${typography.body1Bold.fontWeight};
  line-height: ${typography.body1Bold.lineHeight};
  color: ${colors.text.default};
`

export default RankingList
