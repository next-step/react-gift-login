import { categoryMockData } from '@/data/categoryMockData';
import styled from '@emotion/styled';
import ThemeCard from './ThemeCard';
import { CATEGORY_LABELS } from './constants/labels';

const GiftThemeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  box-sizing: border-box;

  padding-left: ${({ theme }) => theme.spacing[4]};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layout.grid.columns.fixed5};
  gap: ${({ theme }) => theme.layout.grid.gaps.sm};

  margin-top: ${({ theme }) => theme.spacing[5]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

function Category() {
  return (
    <GiftThemeSection>
      <SectionHeader>
        <SectionTitle>{CATEGORY_LABELS.SECTION_TITLE}</SectionTitle>
      </SectionHeader>
      <ThemeGrid>
        {categoryMockData.map((theme) => (
          <ThemeCard key={theme.themeId} theme={theme} />
        ))}
      </ThemeGrid>
    </GiftThemeSection>
  );
}

export default Category;
