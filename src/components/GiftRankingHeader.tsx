import { css } from "@emotion/react";
import { Theme } from "@emotion/react";
import { theme } from "@/styles/theme";
import { IoAppsOutline, IoWomanOutline, IoManOutline } from "react-icons/io5";
import { useTheme } from "@emotion/react";

const GiftRankingHeader = () => {
  const theme = useTheme();
  return (
    <>
      <div css={textStyle(theme)}>실시간 급상승 선물랭킹</div>
      <div css={containerStyle}>
        <IoAppsOutline css={iconStyle(theme)} />
        <IoWomanOutline css={iconStyle} />
        <IoManOutline css={iconStyle} />
      </div>
      <div css={tabContainerStyle(theme)}>
        <div css={tabItemStyle(theme)}>받고 싶어한</div>
        <div css={tabItemStyle(theme)}>많이 선물한</div>
        <div css={tabItemStyle(theme)}>위시로 받은</div>
      </div>
    </>
  );
};

export default GiftRankingHeader;

const textStyle = (theme: Theme) => css`
  padding: 16px;
  font-size: 1.25rem;
  font-weight: ${theme.typography.subtitle1Bold.weight};
  line-height: ${theme.typography.subtitle1Bold.lineHeight};
  color: ${theme.colors.semantic.text.default};
  height: 30px;
  text-align: left;
`;

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 200px;
  width: 100%;
  min-height: 80px;
  border-radius: 16px;
`;

const iconStyle = (theme: Theme) => css`
  font-size: 24px;
  cursor: pointer;
  border-radius: 20%;
  width: 36px;
  height: 36px;
`;

const tabContainerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  border: 1px solid ${theme.colors.semantic.border.default};
  background-color: ${theme.colors.blue.blue100};
`;

const tabItemStyle = (theme: Theme) => css`
  flex: 1;
  padding: 12px 16px;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
