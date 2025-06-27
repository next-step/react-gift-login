import React from 'react';

const Navbar = () => {
  return (
    <nav className="css-1i0th0n e16wk0zs3">
      <div className="css-o7ho5c e16wk0zs2">
        <button aria-label="뒤로 가기">
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
            className="lucide lucide-chevron-left"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
      <div className="css-1vfb318 e16wk0zs1">
        <a href="/">
          <img src="/logo.png" alt="카카오 선물하기 로고" />
        </a>
      </div>
      <div className="css-1jypeps e16wk0zs0">
        <a href="/login?redirect=%2F">
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
            className="lucide lucide-user-round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
