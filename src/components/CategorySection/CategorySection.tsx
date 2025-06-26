
import styled from '@emotion/styled'
import { categories } from '@/data/categories'

const Section = styled.section`
  background-color: white;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.spacing5};
  margin-top: ${({ theme }) => theme.spacing.spacing6};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); 
`

const Title = styled.h3`
  ${({ theme }) => theme.typography.title2Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
  color: ${({ theme }) => theme.colors.text.default};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4};
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`

const Label = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  color: ${({ theme }) => theme.colors.text.default};
`

export const CategorySection = () => {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Grid>
        {categories.map(({ themeId, name, image }) => (
          <Item key={themeId}>
            <Image src={image} alt={name} />
            <Label>{name}</Label>
          </Item>
        ))}
      </Grid>
    </Section>
  )
}
