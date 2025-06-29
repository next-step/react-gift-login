import { css } from '@emotion/react';
import useCustomTheme from './useCustomTheme';
import type { Theme } from '@/theme';

const containerStyle = (theme:Theme)=>css`
background-Color: ${theme.colors.semantic.kakaoYellow};
border-radius: 10px;
padding: ${theme.spacing.spacing4};
display: flex;
flex-direction: column;
gap: ${theme.spacing.spacing1};
color: ${theme.colors.semantic.textDefault};`

const textStyle = (theme:Theme)=>css`
font-size: ${theme.typography.label1Regular.fontSize};
font-weight: ${theme.typography.label1Regular.fontWeight};
line-height: ${theme.typography.label1Regular.lineHeight};
color: ${theme.colors.semantic.textDefault};
`;

const t2Style = (theme:Theme)=>css`
font-size: ${theme.typography.subtitle1Bold.fontSize};
font-weight: ${theme.typography.subtitle1Bold.fontWeight};
line-height: ${theme.typography.subtitle1Bold.lineHeight};
color: ${theme.colors.semantic.textDefault};
`;

const Banner=()=> {
  const theme = useCustomTheme();
return (
  <div css={containerStyle(theme)}>
    <p css={textStyle(theme)}>카카오테크 캠퍼스 3기 여러분</p>
    <p css={t2Style(theme)}>프론트엔드 2단계 과제 화이팅! 🎉</p>
  </div>
)};
export default Banner;
