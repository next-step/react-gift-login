import { categoryMockData } from '@/data/categoryMockData';
import styled from '@emotion/styled';

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
        <SectionTitle>선물 테마</SectionTitle>
      </SectionHeader>
      <ThemeGrid>
        {categoryMockData.map((theme) => (
          <ThemeCard key={theme.themeId} theme={theme} />
        ))}
      </ThemeGrid>
    </GiftThemeSection>
  );
}

const ThemeCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  padding-top: ${({ theme }) => theme.spacing[0]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  box-sizing: border-box;

  width: ${({ theme }) => theme.components.category.themeCardWidth};
  height: ${({ theme }) => theme.components.category.themeCardHeight};

  cursor: pointer;
`;

const ThemeImage = styled.img`
  width: ${({ theme }) => theme.components.category.themeCardImageSize};
  height: ${({ theme }) => theme.components.category.themeCardImageSize};
`;

const ThemeName = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
`;

function ThemeCard({ theme }: { theme: any }) {
  return (
    <ThemeCardContainer>
      <ThemeImage src={theme.image} alt={theme.name} />
      <ThemeName>{theme.name}</ThemeName>
    </ThemeCardContainer>
  );
}

export default Category;
