import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";
import { FiChevronLeft, FiUser } from "react-icons/fi";

const headerWrapper = (theme: Theme) => css`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  background-color: ${theme.colors.semantic.backgroundDefault};
  border-bottom: 1px solid ${theme.colors.semantic.borderDefault};
`;

const titleStyle = (theme: Theme) => css`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.semantic.textDefault};
`;

export default function Header() {
  const theme = useTheme();

  return (
    <header css={headerWrapper(theme)}>
      <FiChevronLeft size={24} />
      <h1 css={titleStyle(theme)}>선물하기</h1>
      <FiUser size={24} />
    </header>
  );
}
