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
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  margin-top: 1rem;
  margin-bottom: 1rem;
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

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-sizing: border-box;

  width: 8rem;
  height: 5rem;

  cursor: pointer;
`;

const ThemeImage = styled.img`
  width: 50px;
  height: 50px;
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
