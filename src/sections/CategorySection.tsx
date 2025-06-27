import styled from "@emotion/styled";
import { categoryList } from "@/mockdata/categoryList";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;
const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.textDefault};
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
  `}
  align-self: flex-start;
  margin-left: 20px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px 40px;
`;
const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const CategoryImage = styled.img`
  width: 60%;
`;

const CategorySection = () => {
  return (
    <Container>
      <Title>선물 테마</Title>
      <Grid>
        {categoryList.map((category) => (
          <CategoryItem key={category.themeId}>
            <CategoryImage src={category.image} />
            <span>{category.name}</span>
          </CategoryItem>
        ))}
      </Grid>
    </Container>
  );
};

export default CategorySection;
