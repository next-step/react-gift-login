import { css, useTheme } from '@emotion/react';
import { FiPlus } from 'react-icons/fi';

const boxStyle = (theme: any) => css`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.semantic.kakaoYellow};
  border-radius: 12px;
  padding: ${theme.spacing.spacing4};
  margin-bottom: ${theme.spacing.spacing6};
`;

const plusIconStyle = css`
  background-color: #fff;
  color: #000;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 12px;
`;

const textStyle = (theme: any) => css`
  font-size: ${theme.fontSizes.body1Bold};
  font-weight: 700;
`;

export default function FriendSelectBox() {
  const theme = useTheme();
  return (
    <div css={boxStyle(theme)}>
      <div css={plusIconStyle}>
        <FiPlus />
      </div>
      <span css={textStyle(theme)}>선물할 친구를 선택해 주세요.</span>
    </div>
  );
}