import styled from '@emotion/styled'

interface CategoryCardProps {
  name: string
  image: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 12px;
  object-fit: cover;
`

const Name = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: #2a3038;
`

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Card>
  )
}

export default CategoryCard