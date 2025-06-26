import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import type { GiftTheme } from '@/types';

interface GiftCategoryGridProps {
  themes: GiftTheme[];
  onThemeClick?: (theme: GiftTheme) => void;
}

const Container = styled.div`
  padding: ${theme.spacing.spacing4};
  background: ${theme.colors.default};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  line-height: ${theme.typography.title1Bold.lineHeight};
  color: ${theme.colors.gray1000};
  margin: 0 0 ${theme.spacing.spacing4} 0;
  padding-left: ${theme.spacing.spacing4};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.spacing4};

  @media (max-width: 480px) {
    gap: ${theme.spacing.spacing3};
  }
`;

const ThemeItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.spacing2};
  border-radius: 12px;
  transition: all 0.2s ease;
`;

const ThemeImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  margin-bottom: ${theme.spacing.spacing2};
  object-fit: cover;

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

const ThemeName = styled.span`
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  color: ${theme.colors.textDefault};
  text-align: center;
  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export function GiftCategoryGrid({
  themes,
  onThemeClick,
}: GiftCategoryGridProps) {
  const handleThemeClick = (theme: GiftTheme) => {
    console.log('테마 클릭:', theme.name);
    onThemeClick?.(theme);
  };

  return (
    <Container>
      <SectionTitle>선물 테마</SectionTitle>
      <Grid>
        {themes.map(theme => (
          <ThemeItem
            key={theme.themeId}
            onClick={() => handleThemeClick(theme)}
          >
            <ThemeImage src={theme.image} alt={theme.name} />
            <ThemeName>{theme.name}</ThemeName>
          </ThemeItem>
        ))}
      </Grid>
    </Container>
  );
}
