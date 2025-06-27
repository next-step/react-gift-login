import { themes } from '@/data/themes.ts';
import { Title, Section, ThemeCard, ThemeList, YellowBox } from '@/components/GiftThema/GiftThema.styles.ts';

export default function Gift_Thema() {
  return (
    <Section>
      <Title>선물 테마</Title>
      <ThemeList>
        {themes.map((item) => (
          <ThemeCard key={item.themeId}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </ThemeCard>
        ))}
      </ThemeList>

      <YellowBox>
        <div>카카오테크 캠퍼스 3기 여러분</div>
        <div>프론트엔드 2단계 과제 화이팅! 🎉</div>
      </YellowBox>
    </Section>
  );
}