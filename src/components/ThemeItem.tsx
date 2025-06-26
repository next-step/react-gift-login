import { ThemeImage, ThemeItemWrapper, ThemeItemText } from '@/styles/ThemeItem.styles';

type Themetype = {
  themeId: number;
  name: string;
  image: string;
};

function ThemeItem({ theme }: { theme: Themetype }) {
  return (
    <ThemeItemWrapper>
      <ThemeImage src={theme.image} alt={theme.name} />
      <ThemeItemText>{theme.name}</ThemeItemText>
    </ThemeItemWrapper>
  );
}

export default ThemeItem;
