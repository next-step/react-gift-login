import styled from "@emotion/styled";
import { categoryData } from "@/mocks/categoryData";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

const SectionTitle = styled.h2`
  ${({ theme }) => theme.typography.title.title1Bold};
  margin-left: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const CategoryName = styled.span`
  ${({ theme }) => theme.typography.label.label2Regular};
  text-align: center;
`;

type Category = {
    themeId: number;
    name: string;
    image: string;
};

export default function CategorySection() {

    return (
        <Section>
            <SectionTitle>선물 테마</SectionTitle>
            <Grid>
                {categoryData.map((category: Category) => (
                    <CategoryItem key={category.themeId}>
                        <CategoryImage src={category.image} alt={category.name} />
                        <CategoryName>{category.name}</CategoryName>
                    </CategoryItem>
                ))}
            </Grid>
        </Section>
    );
}
