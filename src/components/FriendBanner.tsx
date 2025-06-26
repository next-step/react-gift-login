import { css, useTheme } from "@emotion/react";
import { FiPlus } from "react-icons/fi";

export const FriendBanner = () => {
  const theme = useTheme();

  return (
    <div css={outerWrapper(theme)}>
      <div css={innerBox(theme)}>
        <div css={iconBox(theme)}>
          <FiPlus size={20} color={theme.colors.gray1000} />
        </div>
        <span css={textStyle(theme)}>선물할 친구를 선택해 주세요.</span>
      </div>
    </div>
  );
};

const outerWrapper = (theme: any) => css`
  background-color: ${theme.colors.gray100};
  padding: 12px 16px;
`;

const innerBox = (theme: any) => css`
  background-color: ${theme.colors.gray00};
  padding: 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

const iconBox = (theme: any) => css`
  background-color: ${theme.colors.kakaoYellow};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const textStyle = (theme: any) => css`
  color: ${theme.colors.text.default};
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  line-height: ${theme.typography.body1Bold.lineHeight};
`;
