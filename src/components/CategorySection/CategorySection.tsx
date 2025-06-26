/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import CategoryItem from './CategoryItem';
import { categories } from './mock';

export default function CategorySection() {
  return (
    <Container>
      {categories.map(({ themeId, name, image }) => (
        <CategoryItem key={themeId} name={name} image={image} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 8px;
  padding: 16px 0;
`;
