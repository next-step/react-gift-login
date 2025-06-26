import styled from '@emotion/styled'
import { categories } from '@/data/categories'

export default function Category() {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Grid>
        {categories.map((item) => (
          <CategoryItem key={item.themeId}>
            <Image src={item.image} alt={item.name} />
            <Label>{item.name}</Label>
          </CategoryItem>
        ))}
      </Grid>
    </Section>
  )
}

const Section = styled.section`
  padding: 24px 0;
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개씩 한 줄
  gap: 16px 8px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr); // 모바일은 4개씩
  }
`

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
`

const Label = styled.span`
  font-size: 12px;
  margin-top: 4px;
  text-align: center;
`
