import styled from '@emotion/styled';
import { CategoryItem } from '@/components/CategoryItem';
import { categoryMock } from '@/data/categoryMock';

export function CategorySection() {
  return (
    <Section>
      <Title>선물 테마</Title>

      <Grid>
        {categoryMock.map(({ themeId, name, image }) => (
          <CategoryItem key={themeId} name={name} image={image} />
        ))}
      </Grid>
    </Section>
  );
}

/* ───────── styles ───────── */

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.semanticColors.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing3};

  /* 초소형 화면 대응 */
  @media (max-width: 360px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
