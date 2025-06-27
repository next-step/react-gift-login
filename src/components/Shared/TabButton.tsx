/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';

type TabButtonProps = {
  active: boolean;
  theme: ThemeType;
  onClick: () => void;
  icon?: any;
  label: string;
  isSubTab?: boolean;
};

const TabButton = ({ active, theme, onClick, icon, label, isSubTab = false }: TabButtonProps) => {
  const baseStyle = isSubTab ? subTabButton(theme, active) : tabButton(theme, active);

  return (
    <button onClick={onClick} css={baseStyle}>
      {icon && <span css={iconStyle}>{icon}</span>}
      {label}
    </button>
  );
};

const tabButton = (theme: ThemeType, active: boolean) => css`
  width: 100%;
  padding: 10px 0;
  font-size: ${theme.typography.body2Regular.fontSize};
  font-weight: ${theme.typography.body2Bold.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray700};
  background-color: ${active ? theme.color.blue.blue100 : theme.color.gray.gray100};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const subTabButton = (theme: ThemeType, active: boolean) => css`
  background: ${active ? '#fff' : 'transparent'};
  border: none;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray600};
  border-radius: 10px;
  padding: 8px 0;
  cursor: pointer;
  width: 100%;
`;

const iconStyle = css`
  font-size: 14px;
`;

export default TabButton;
