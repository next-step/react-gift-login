/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Navigation = () => {
  const navStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  `;

  const iconButtonStyle = css`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const logoStyle = css`
    height: 42px;
  `;

  return (
    <nav css={navStyle}>
      <button css={iconButtonStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      
      <img 
        css={logoStyle}
        src="/카카오톡 선물하기.webp" 
        alt="카카오톡 선물하기" 
      />
      
      <button css={iconButtonStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 0 0-16 0"/>
        </svg>
      </button>
    </nav>
  );
};

export default Navigation; 