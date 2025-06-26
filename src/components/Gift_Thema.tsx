import { themes } from '@/data/themes';
import styled from '@emotion/styled';

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

const Section = styled.section`
    padding: 16px;
    background-color: #fff;
`;

const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin: 20px 0 20px 12px;
    color: #222;
`;

const ThemeList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
`;

const ThemeCard = styled.div`
    flex: 0 0 auto;
    width: 104px;
    text-align: center;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 12px;
        object-fit: cover;
        aspect-ratio: 1;
        transition: transform 0.2s ease;
    }
  
    p {
        margin-top: 6px;
        font-size: 13px;
        color: #333;
        white-space: nowrap;
    }
  
    &:hover img { 
        transform: scale(1);
    }
`;

const YellowBox = styled.div`
    background-color: #fee500;
    border-radius: 20px;
    padding: 16px;
    margin-top: 30px;
    font-weight: 600;
    font-size: 15px;
    color: #000;
    line-height: 1.5;
`;
