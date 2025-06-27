import styled from '@emotion/styled';
import CategoryBtn from '@/components/CategoryBtn';
import { categoryData } from '@/data/CATEGORY_DATA';

const GiftCategoryList = () => {
  return (
    <Layout>
      <TitleText>선물 테마</TitleText>
      <CategoryItem>
        {categoryData.map((category) => (
          <CategoryBtn
            key={category.themeId}
            name={category.name}
            image={category.image}
          />
        ))}
      </CategoryItem>
    </Layout>
  );
};

export default GiftCategoryList;

const Layout = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing6};
`;

const TitleText = styled.h2`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing7};
`;

const CategoryItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
