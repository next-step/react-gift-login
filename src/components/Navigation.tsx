/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from '@/styles/theme';
import PresentLogo from '@/assets/present.webp';

const Navigation = () => {
  const theme = useTheme();

  const navStyle = css`
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing[0]} ${theme.spacing[4]};
    background-color: ${theme.color.semantic.background.default};
  `;

  const iconButtonStyle = css`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing[0]};
    color: ${theme.color.semantic.text.default};
  `;

  const logoStyle = css`
    height: 44px;
    cursor: pointer;
  `;

  return (
    <nav css={navStyle}>
      <div>
        <button css={iconButtonStyle} aria-label="뒤로가기">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>

      <div>
        <img css={logoStyle} src={PresentLogo} alt="카카오 선물하기 로고" />
      </div>

      <div>
        <button css={iconButtonStyle} aria-label="로그인">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
