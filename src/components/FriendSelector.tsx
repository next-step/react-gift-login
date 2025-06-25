/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

const FriendSelector = () => {
  const theme = useTheme();
  
  const sectionStyle = css`
    padding: ${theme.spacing.spacing4};
    background-color: ${theme.colors.gray[200]};
  `;

  const buttonStyle = css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${theme.spacing.spacing4};
    background-color: white;
    border: 1px solid ${theme.colors.gray[300]};
    border-radius: 12px;
    cursor: pointer;
  `;

  const iconContainerStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing.spacing3};
    width: 42px;
    height: 42px;
    background-color: ${theme.semantic.brand.kakaoYellow};
    border-radius: 18px;
  `;

  const textStyle = css`
    ${theme.typography.subtitle1Bold}
    color: ${theme.semantic.text.default};
  `;

  return (
    <section css={sectionStyle}>
      <button css={buttonStyle}>
        <div css={iconContainerStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a3038" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </div>
        <p css={textStyle}>선물할 친구를 선택해 주세요.</p>
      </button>
    </section>
  );
};

export default FriendSelector; 