import { type Theme, css, useTheme } from "@emotion/react";
import { FiPlus } from "react-icons/fi";

export const FriendBanner = () => {
  const theme = useTheme();

  return (
    <div css={outerWrapper(theme)}>
      <div css={innerBox(theme)}>
        <div css={iconBox(theme)}>
          <FiPlus size={20} color={theme.colors.colorScale.gray.gray1000} />
        </div>
        <span css={textStyle(theme)}>선물할 친구를 선택해 주세요.</span>
      </div>
    </div>
  );
};

const outerWrapper = (theme: Theme) => css`
  background-color: ${theme.colors.colorScale.gray.gray100};
  padding: 12px 16px;
`;

const innerBox = (theme: Theme) => css`
  background-color: ${theme.colors.colorScale.gray.gray00};
  padding: 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

const iconBox = (theme: Theme) => css`
  background-color: ${theme.colors.brand.kakao.yellow};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const textStyle = (theme: Theme) => css`
  color: ${theme.colors.semantic.text.default};
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  line-height: ${theme.typography.body1Bold.lineHeight};
`;
