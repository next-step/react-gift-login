import { css} from '@emotion/react';
import useCustomTheme from './useCustomTheme'
import type {Theme} from '@/theme'

const containerStyle = (theme:Theme)=>css`
    padding: ${theme.spacing.spacing4};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.spacing4};
    height: 80px;
  `;
  const friendBoxStyle =(theme:Theme)=> css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.spacing2};
    padding: ${theme.spacing.spacing2};
    border-radius: 8px;
  `;

  const plusCircleStyle = (theme:Theme)=>css`
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.semantic.kakaoYellow};
    color: black;
    font-size: 25px;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const bannerStyle =(theme:Theme)=> css`
    background-color: ${theme.colors.semantic.backgroundDefault};
    padding: ${theme.spacing.spacing2};
    font-size: ${theme.typography.label2Regular.fontSize};
    border-radius: 8px;
  `;
const SelectFr = () => {
  const theme = useCustomTheme();
  return (
    <div css={containerStyle(theme)}>
      <div css={friendBoxStyle(theme)}>
        <div css={plusCircleStyle(theme)}>+</div>
        <span>선물할 친구를 선택해 주세요.</span>
      </div>
      <div css={bannerStyle(theme)}>
      </div>
    </div>
  );
};

export default SelectFr;
