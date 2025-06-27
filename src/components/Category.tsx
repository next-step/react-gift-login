import styled from "@emotion/styled";
import { categoryMock } from "@/assets/categoryMock";

const Category = () => {
  const categoryList = categoryMock;
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
  padding: ${({ theme }) => theme.spacing.spacing1};
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
`;
const TitleDiv = styled.div`
  padding-left: ${({ theme }) => theme.spacing.spacing2};
  padding-top: 0;
  padding-right: ${({ theme }) => theme.spacing.spacing2};
  padding-bottom: ${({ theme }) => theme.spacing.spacing5};
  margin-right: auto;
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const CategoryListDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing5} ${({ theme }) => theme.spacing.spacing2};
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
  color: ${({ theme }) => theme.color.textColor.default};
`;

export default Category;
