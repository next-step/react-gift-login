import { css } from "@emotion/react";
import { FiArrowLeft, FiUser } from "react-icons/fi";

export const NavigationBar = () => {
  return (
    <nav css={navStyle}>
      <div css={leftStyle}>
        <FiArrowLeft size={24} />
      </div>
      <div css={centerStyle}>선물하기</div>
      <div css={rightStyle}>
        <FiUser size={24} />
      </div>
    </nav>
  );
};

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #dcdee3;
`;

const leftStyle = css`
  display: flex;
  align-items: center;
`;

const centerStyle = css`
  font-size: 16px;
  font-weight: 700;
`;

const rightStyle = css`
  display: flex;
  align-items: center;
`;
