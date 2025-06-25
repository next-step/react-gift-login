import styled from "@emotion/styled";
import { category_mock } from "@/assets/category_mock";

const Category = () => {
  const categoryList = category_mock;
  return (
    <Container>
      <TitleDiv>선물 테마</TitleDiv>
      <CategoryListDiv>
        {categoryList.map((category) => (
          <CategoryDiv key={category.themeId}>
            <CategoryImg src={category.image} alt={category.name} />
            <CategoryName>{category.name}</CategoryName>
          </CategoryDiv>
        ))}
      </CategoryListDiv>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: ${({ theme }) => theme.background_color.default};
`;
const TitleDiv = styled.div`
  padding: 0 8px 20px;
  margin-right: auto;
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const CategoryListDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 4px;
`;
const CategoryDiv = styled.div`
  width: 100%;
  height: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25;
  cursor: pointer;
`;
const CategoryImg = styled.img`
  max-width: 3.125rem;
  max-height: 3.125rem;
  width: 100%;
  border-radius: 18px;
  object-fit: cover;
  overflow: hidden;
`;
const CategoryName = styled.p`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.text_color.default};
`;

export default Category;
