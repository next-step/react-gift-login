import styled from "@emotion/styled";
import ThemeButton from "@src/utils/ThemeButton";
import { themeMockData } from "@src/mock/mockData";

function GiftThemePanel() {
  return (
    <GiftThemePanelWrapper>
      <p>선물 테마</p>
      <ThemePlaceholder>
        {themeMockData.map((theme) => {
          return (
            <ThemeButton
              key={theme.themeId}
              image={theme.image}
              caption={theme.name}
            />
          );
        })}
      </ThemePlaceholder>
    </GiftThemePanelWrapper>
  );
}

const ThemePlaceholder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const GiftThemePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
`;

export default GiftThemePanel;
