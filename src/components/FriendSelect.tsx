/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from '@/styles/theme';

const FriendSelect = () => {
  const theme = useTheme();

  const sectionStyle = css`
    box-sizing: border-box;
    height: 106px;
    padding: ${theme.spacing[4]} ${theme.spacing[3]};
    background-color: ${theme.color.gray[200]};
  `;

  const buttonStyle = css`
    width: 100%;
    height: 74px;
    border: none;
    background-color: ${theme.color.semantic.background.default};
    display: flex;
    align-items: center;
    gap: ${theme.spacing[4]};
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    border-radius: 16px;
    box-shadow: 0 0 0 1px ${theme.color.gray[200]};
    cursor: pointer;
  `;

  const iconWrapperStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    color: ${theme.color.gray[700]};
    border-radius: 16px;
    background-color: ${theme.color.yellow[600]};
  `;

  const textStyle = css`
    font-size: ${theme.typography.body.body1Bold.fontSize};
    font-weight: ${theme.typography.body.body1Bold.fontWeight};
    line-height: ${theme.typography.body.body1Bold.lineHeight};
    color: ${theme.color.semantic.text.default};
  `;

  return (
    <section css={sectionStyle}>
      <button css={buttonStyle} aria-label="선물할 친구 선택">
        <div css={iconWrapperStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a3038"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
        <p css={textStyle}>선물할 친구를 선택해 주세요.</p>
      </button>
    </section>
  );
};

export default FriendSelect;
