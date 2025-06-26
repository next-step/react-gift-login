import styled from '@emotion/styled'
import { categoryMock } from '@/components/categoryMock'
import { CategoryItem } from '@/components/CategoryItem'

export function CategorySection() {
  return (
    <SectionWrapper>
      <Title>선물 테마</Title>
      <GridWrapper>
        {categoryMock.map(({ themeId, name, image }) => (
          <CategoryItem key={themeId} name={name} image={image} />
        ))}
      </GridWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 16px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.textDefault};
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
`
