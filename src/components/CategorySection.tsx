import styled from '@emotion/styled';
import { categories } from '../data/categories';
//컴포넌트의 가독성을 좋게 하기 위해 styled방식으로 바꾸었습니다.

const CategorySection = () => {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Grid>
        {categories.slice(0, 15).map((category) => (
          <Item key={category.themeId}>
            <Image 
              src={category.image}
              alt={category.name}
            />
            <Name>{category.name}</Name>
          </Item>
        ))}
      </Grid>
    </Section>
  );
};

export default CategorySection;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: ${({ theme }) => theme.spacing.spacing5};
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 52px;
  height: 52px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const Name = styled.span`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.semantic.text.default};
  text-align: center;
`;

