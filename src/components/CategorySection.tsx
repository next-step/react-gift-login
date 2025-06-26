import styled from '@emotion/styled'
import { categoryMockData } from '@/mocks/categories'

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
`

const Title = styled.h2`
  ${({ theme }) => `
    font-size: ${theme.typography.subtitle1Bold.fontSize};
    font-weight: ${theme.typography.subtitle1Bold.fontWeight};
    line-height: ${theme.typography.subtitle1Bold.lineHeight};
    color: ${theme.colors.semantic.textDefault};
    margin-bottom: ${theme.spacing.spacing3};
  `}
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`

const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`

const Label = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.label2Regular.fontSize};
    font-weight: ${theme.typography.label2Regular.fontWeight};
    line-height: ${theme.typography.label2Regular.lineHeight};
    color: ${theme.colors.semantic.textDefault};
  `}
`

const CategorySection = () => {
  return (
    <SectionWrapper>
      <Title>선물 테마</Title>
      <Grid>
        {categoryMockData.map(({ themeId, name, image }) => (
          <Item key={themeId}>
            <Image src={image} alt={name} />
            <Label>{name}</Label>
          </Item>
        ))}
      </Grid>
    </SectionWrapper>
  )
}

export default CategorySection
