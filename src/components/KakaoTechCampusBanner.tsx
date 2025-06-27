import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";

export const KakaoTechCampusBanner = () => {
  const theme = useTheme();

  return (
    <div css={container(theme)}>
      <div css={subText(theme)}>카카오테크 캠퍼스 3기 여러분</div>
      <strong css={mainText(theme)}>프론트엔드 2단계 과제 화이팅! 🎉</strong>
    </div>
  );
};

const container = (theme: Theme) => css`
  background-color: ${theme.colors.brand.kakao.yellow};
  color: ${theme.colors.colorScale.gray.gray1000};
  padding: 16px;
  margin: 16px;
  border-radius: 12px;
  text-align: left;
`;

const subText = (theme: Theme) => css`
  color: ${theme.colors.colorScale.gray.gray800};
  font-size: ${theme.typography.body2Regular.fontSize};
  font-weight: ${theme.typography.body2Regular.fontWeight};
  line-height: ${theme.typography.body2Regular.lineHeight};
  margin-bottom: 4px;
`;

const mainText = (theme: Theme) => css`
  display: block;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  line-height: ${theme.typography.body1Bold.lineHeight};
`;
