import { css } from "@emotion/react";
import { Theme } from "@emotion/react";
import { theme } from "@/styles/theme";
import { IoAppsOutline, IoWomanOutline, IoManOutline } from "react-icons/io5";

const GiftRankingHeader = () => {
  return (
    <>
      <div css={(theme) => textStyle(theme)}>실시간 급상승 선물랭킹</div>
      <div css={containerStyle}>
        <IoAppsOutline css={iconStyle} />
        <IoWomanOutline css={iconStyle} />
        <IoManOutline css={iconStyle} />
      </div>
      <div css={tabContainerStyle}>
        <div css={tabItemStyle}>받고 싶어한</div>
        <div css={tabItemStyle}>많이 선물한</div>
        <div css={tabItemStyle}>위시로 받은</div>
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
  border-radius: 16px;
  height: 30px;
  text-align: left;
`;

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  min-height: 80px;
  border-radius: 16px;
`;

const iconStyle = css`
  font-size: 24px;
  cursor: pointer;
`;

const tabContainerStyle = css`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
`;

const tabItemStyle = css`
  flex: 1;
  padding: 12px 16px;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
